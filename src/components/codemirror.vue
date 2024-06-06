<template>
  <div class="compareClass">
    <div ref="CodeMirror"></div>
  </div>
</template>
 
<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/merge/merge.js';
import 'codemirror/addon/merge/merge.css';
import DiffMatchPatch from 'diff-match-patch';
// import {
//   CstMixin,
// } from 'boot/mixins/cst';
 
window.diff_match_patch = DiffMatchPatch;
window.DIFF_DELETE = -1;
window.DIFF_INSERT = 1;
window.DIFF_EQUAL = 0;
 
export default {
  name: 'CodeMirror',
  // mixins: [CstMixin],
  props: {
    codeId: {
      type: String,
      defualt: '',
    },
    currentData: {
      type: Object,
      defualt: undefined,
    },
  },
  data() {
    return {
      historyCode: '',
      currentCode: '',
      HisCode: null,
      divide: '',
    };
  },
  created() {
  },
  mounted() {
    // this.showLoading();
    if (this.currentData) {
      this.currentCode = `${this.currentData.template.value}\n//This is used to separate the code\n${this.currentData.js.value}\n//This is used to separate the code${this.currentData.css.value}`;
    }
    this.$nextTick(() => {
      this.getTemplateCode();
      this.initUI()
    });
  },
  methods: {
    getTemplateCode() {
      this.historyCode = `//This is used to separate the code 隔热隔热隔热个人\n//This is used to separate the code\n隔热隔热隔热个人\n//This is used to separate the code 隔热隔热隔热个人`;
    },
    backCurrCode() {
      const newStr = this.HisCode.edit.getValue();
      const [template, js, cssValue] = newStr.split('//This is used to separate the code');
      const codeData = {
        formMixin: false,
        template: {
          value: template.trim(), key: 'template', mode: 'text/x-vue', tab: '模板',
        },
        js: {
          value: js.trim(), key: 'js', mode: 'text/javascript', tab: '代码',
        },
        css: {
          value: cssValue.trim(), key: 'css', mode: 'text/css', tab: '样式',
        },
      };
      this.$emit('getNewData', codeData);
    },
    // 初始化
    initUI() {
      const target = this.$refs.CodeMirror;
      target.innerHTML = '';
      this.HisCode = CodeMirror.MergeView(target, {
        value: this.currentCode, // 当前内容
        orig: this.historyCode, // 历史版本
        origLeft: null,
        lineNumbers: true, // 显示行号
        indentUnit: 3, // 缩进吧
        mode: 'html', // 视图文件格式
        highlightDifferences: true, // 高亮
        styleActiveLine: true, // 选中的样式
        connect: 'align', // 居中方式
        theme: 'cobalt', // 视图样式
        readOnly: false, // 只读 不可修改
      });
      this.$nextTick(() => {
        // 获取箭头数量
        const elements = document.getElementsByClassName('CodeMirror-merge-copy');
        if (!elements) {
          return
        }
        this.$emit('getDiff', elements.length);
        // 只能通过父容器事件委托来点击
        const parentElement = document.getElementsByClassName('CodeMirror-merge-copybuttons-right');
        parentElement[0].addEventListener('click', (event) => {
          if (event.target.classList.contains('CodeMirror-merge-copy')) {
            this.$emit('getDiff', elements.length - 1);
          }
        });
      });
    },
  },
};
</script>
<style lang="scss">
.compareClass {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
 
  .CodeMirror-merge {
    display: flex;
  }
 
  .CodeMirror-merge, .CodeMirror-merge .CodeMirror {
    height: 100vh;
  }
 
  .CodeMirror-merge-2pane .CodeMirror-merge-pane {
    height: 100%;
  }
 
  .CodeMirror-merge-r-chunk {
    background: rgba(30, 144, 255, 0.5);
  }
 
  .CodeMirror-merge-r-chunk-start {
    border-top: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-r-chunk-end {
    border-bottom: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-r-connect {
    fill: rgba(30, 144, 255, 0.5);
    stroke: rgba(30, 144, 255, 0.5);
    stroke-width: 1px;
  }
 
  .CodeMirror-merge-l-chunk {
    background: rgba(30, 144, 255, 0.5);
  }
 
  .CodeMirror-merge-l-chunk-start {
    border-top: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-l-chunk-end {
    border-bottom: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-l-connect {
    fill: rgba(30, 144, 255, 0.5);
    stroke: rgba(30, 144, 255, 0.5);
    stroke-width: 1px;
  }
 
  .CodeMirror-merge-l-chunk {
    background: rgba(30, 144, 255, 0.5);
  }
 
  .CodeMirror-merge-r-chunk {
    background: rgba(30, 144, 255, 0.5);
  }
 
  .CodeMirror-merge-l-chunk-start {
    border-top: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-r-chunk-start {
    border-top: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-l-chunk-end {
    border-bottom: 1px solid dodgerblue;
  }
 
  .CodeMirror-merge-r-chunk-end {
    border-bottom: 1px solid dodgerblue;
  }
  //反转样式
  .CodeMirror-merge-right {
    left: 0px
  }
 
  .CodeMirror-merge-gap {
    left: 47%;
  }
 
  .CodeMirror-merge-editor {
    position: absolute;
    right: 0;
  }
 
  .CodeMirror-merge-copy {
    transform: rotateY(180deg);
    left: 10px !important;
  }
}
</style>