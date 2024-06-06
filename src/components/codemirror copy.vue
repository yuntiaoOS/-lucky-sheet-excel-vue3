<template>
  <div>
    <button onclick="handleAdd">代码编辑，高亮补全</button>
    <button onclick="handleMerge">代码版本，差异对比</button>

    <div id="view"></div>
  </div>

</template>

<script setup>
import { MergeView } from "@codemirror/merge"
import { EditorView, basicSetup } from "codemirror"
import { EditorState } from "@codemirror/state"
import { javascript } from "@codemirror/lang-javascript"

import { ref, onMounted } from "vue";
let doc = '#!/bin/bash\nfafdasdfasdasdadsdsadsadsddsadsads' +
  'cd /root/\n' +
  'list=(`ls`)\n' +
  ' \n' +
  'for i in ${list[@]}\n' +
  'do\n' +
  '   if [ -d $i ]\n' +
  '   then\n' +
  '       cp -r $i /tmp/\n' +
  '   fi\n' +
  `let view = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: document.body
  })`


onMounted(() => {
  let target = document.getElementById("view");
  let view = new MergeView({
    a: {
      doc,
      extensions: [basicSetup, javascript()]
    },
    b: {
      doc: doc.replace(/t/g, "T") + "\nSix",
      extensions: [
        basicSetup, javascript(),
        EditorView.editable.of(false),
        EditorState.readOnly.of(true)
      ]
    },
    parent: target //document.body
  })
})
</script>
