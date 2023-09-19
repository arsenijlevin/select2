/*!
 * Select2-to-Tree 1.1.1
 * https://github.com/clivezhg/select2-to-tree
 */
var searchCustomAdapter = function (SelectAdapter) {
  SelectAdapter.prototype.query = function (params, callback) {
    var data = []
    var self = this
    var added = []

    var $options = this.$element.children()

    function checkParent($option) {
      var pup = $option.data('pup')

      if (pup) {
        var $parent = self.$element.find('[value="' + pup + '"]')
        var poption = self.item($parent)

        if (!added.includes($parent.val())) {
          if ($parent.data('pup')) {
            checkParent($parent)
          }

          data.push(poption)
          added.push($parent.val())
        }
      }
    }

    $options.each(function () {
      if (this.tagName.toLowerCase() !== 'option' && this.tagName.toLowerCase() !== 'optgroup') {
        return
      }

      var $option = $(this)

      var option = self.item($option)

      var matches = self.matches(params, option)

      if (matches !== null) {
        if (!added.includes($option.val())) {
          checkParent($option)

          data.push(matches)
          added.push($option.val())
        }
      }
    })

    callback({
      results: data,
    })
  }
};

(function ($) {
  $.fn.select2ToTree = function (options) {
    var opts = $.extend({}, options);

    // Adapter allows to see all hierarchy on search
    function setupCustomAdapter() {
      $.fn.select2.amd.define('CustomSelectAdapter', ['select2/data/select'], searchCustomAdapter)
      opts.selectAdapter = $.fn.select2.amd.require('CustomSelectAdapter');
    }

    if (opts.treeData) {
      setupCustomAdapter();
      buildSelect(opts.treeData, this);
    }

    opts._templateResult = opts.templateResult;

    // Shows resulted items in ul
    opts.templateResult = function (data, container) {
      var label = data.text;

      if (typeof opts._templateResult === "function") {
        label = opts._templateResult(data, container);
      }
      var $iteme = $("<span class='item-label'></span>").append(label);
      if (data.element) {
        var ele = data.element;
        var s2data = s2inst.data("select2");
        const isSearching = Array.from(s2data.$dropdown[0].classList).includes("searching-result");

        container.setAttribute("data-val", ele.value);
        if (ele.className) container.className += " " + ele.className;
        if (isSearching) container.className += " " + "opened";
        if (ele.getAttribute("data-pup")) {
          container.setAttribute("data-pup", ele.getAttribute("data-pup"));
        }

        if ($(container).hasClass("non-leaf")) {
          return $.merge(
            $iteme,
            $(
              '<span class="expand-collapse" onmouseup="expColMouseupHandler(event);"></span>'
            )
          );
        }
      }

      return $iteme;
    };

    window.expColMouseupHandler = function (evt) {
      // console.log(evt.target || evt.srcElement);

      toggleSubOptions(evt.target || evt.srcElement);
      /* prevent Select2 from doing "select2:selecting","select2:unselecting","select2:closing" */
      evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    };

    window.expColMouseupHandlerNoPrevent = function (target) {
      // console.log(evt.target || evt.srcElement);

      toggleSubOptions(target);
    };

    var s2inst = this.select2(opts);

    var openFunc = function (evt) {
      var s2data = s2inst.data("select2");
      s2data.$dropdown.addClass("s2-to-tree");
      s2data.$dropdown.removeClass("searching-result");


      var $allsch = s2data.$dropdown
        .find(".select2-search__field")
        .add(s2data.$container.find(".select2-search__field"));
      $allsch.off("input", inputHandler);
      $allsch.on("input", inputHandler);
    };

    s2inst.on("select2:open", openFunc);

    /**
     * Show search result options even if they are collapsed
     * On key input in search event
     */

    function inputHandler(evt) {
      var s2data = s2inst.data("select2");
      const searchInputStringLength = $(this).val().trim().length;

      if (searchInputStringLength > 0) {
        s2data.$dropdown.addClass("searching-result");
      } else {
        s2data.$dropdown.removeClass("searching-result");
      }
    }

    window.inputHandler = inputHandler;

    return s2inst;
  };

  /* Build the Select Option elements */
  function buildSelect(treeData, $el) {
    /* Support the object path (eg: `item.label`) for 'valFld' & 'labelFld' */
    function readPath(object, path) {
      var currentPosition = object;
      for (var j = 0; j < path.length; j++) {
        var currentPath = path[j];
        if (currentPosition[currentPath]) {
          currentPosition = currentPosition[currentPath];
          continue;
        }
        return "MISSING";
      }
      return currentPosition;
    }

    function buildOptions(dataArr, curLevel, pup) {
      var labelPath;
      if (treeData.labelFld && treeData.labelFld.split(".").length > 1) {
        labelPath = treeData.labelFld.split(".");
      }
      var idPath;
      if (treeData.valFld && treeData.valFld.split(".").length > 1) {
        idPath = treeData.valFld.split(".");
      }

      for (var i = 0; i < dataArr.length; i++) {
        var data = dataArr[i] || {};
        var $opt = $("<option></option>");
        if (labelPath) {
          $opt.text(readPath(data, labelPath));
        } else {
          $opt.text(data[treeData.labelFld || "text"]);
        }
        if (idPath) {
          $opt.val(readPath(data, idPath));
        } else {
          $opt.val(data[treeData.valFld || "id"]);
        }
        if (
          data[treeData.selFld || "selected"] &&
          String(data[treeData.selFld || "selected"]) === "true"
        ) {
          $opt.prop("selected", data[treeData.selFld || "selected"]);
        }
        if ($opt.val() === "") {
          $opt.prop("disabled", true);
          $opt.val(getUniqueValue());
        }
        $opt.addClass("l" + curLevel);
        if (pup) $opt.attr("data-pup", pup);
        $el.append($opt);
        var inc = data[treeData.incFld || "inc"];
        if (inc && inc.length > 0) {
          $opt.addClass("non-leaf");
          buildOptions(inc, curLevel + 1, $opt.val());
        }
      } // end 'for'
    } // end 'buildOptions'

    buildOptions(treeData.dataArr, 1, "");
    if (treeData.dftVal) $el.val(treeData.dftVal);
  }

  var uniqueIdx = 1;
  function getUniqueValue() {
    return "autoUniqueVal_" + uniqueIdx++;
  }

  // TODO : here

  function toggleSubOptions(target) {
    $(target.parentNode).toggleClass("opened");
    showHideSub(target.parentNode);

    // const levelString = Array.from(target.parentNode.classList).find((a) =>
    //   a.match(/^l[0-9]$/)
    // ); // l1, l2, l3...

    // if (!levelString) return;

    // const listRoot = target.parentNode.parentNode; // <ul> tag of the list

    // if (!listRoot) return;


    // Array.from(listRoot.children).forEach((child) => {

    //   if (
    //     Array.from(child.classList).includes(levelString) && // on the same level
    //     !child.isEqualNode(target.parentNode) && // any li in ul !== hovered element
    //     Array.from(child.classList).includes("opened") // is li opened
    //   ) {

    //     $(child).toggleClass("opened");
    //     showHideSub(child);

    //   }
    // });
  }

  function showHideSub(ele) {
    var curEle = ele;
    var $options = $(ele).parent(".select2-results__options");
    var shouldShow = true;
    do {
      var pup = ($(curEle).attr("data-pup") || "").replace(/'/g, "\\'");
      curEle = null;
      if (pup) {
        var pupEle = $options.find(
          ".select2-results__option[data-val='" + pup + "']"
        );
        if (pupEle.length > 0) {
          if (!pupEle.eq(0).hasClass("opened")) {
            // hide current node if any parent node is collapsed
            $(ele).removeClass("showme");
            shouldShow = false;
            break;
          }
          curEle = pupEle[0];
        }
      }
    } while (curEle);
    if (shouldShow) $(ele).addClass("showme");

    var val = ($(ele).attr("data-val") || "").replace(/'/g, "\\'");
    $options
      .find(".select2-results__option[data-pup='" + val + "']")
      .each(function () {
        showHideSub(this);
      });
  }
})(jQuery);

$(document).ready(function () {
  document.body.addEventListener("pointermove", function (e) {
    // console.log(e);

    if (!e) return;
    // console.log(e.currentTarget);
    var ele = document.elementFromPoint(e.clientX, e.clientY);
    // console.log(ele);

    if (
      ele.classList.contains("item-label") &&
      !ele.parentNode.classList.contains("opened")
    ) {
      // console.log(ele);

      expColMouseupHandlerNoPrevent(ele);
      //console.log(ele);
    }
  });
});

// Возвращает функцию, которая, пока она продолжает вызываться,
// не будет запускаться.
// Она будет вызвана один раз через N миллисекунд после последнего вызова.
// Если передано аргумент `immediate` (true), то она запустится сразу же при
// первом запуске функции.

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};