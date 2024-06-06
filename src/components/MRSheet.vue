<template>
  <div style="position: relative; top: 0">
    <input id="uploadBtn" type="file" @change="loadExcel" />

    <span>Or Load remote xlsx file:</span>

    <select v-model="selected" @change="selectExcel">
      <option disabled value="">Choose</option>
      <option v-for="option in options" :key="option.text" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <a href="javascript:void(0)" @click="downloadExcel">Download source xlsx file</a>
  </div>
  <div style="display: flex;justify-content: space-between;">
    <div>
      <draggable tag="ul" :list="options" item-key="id"
        v-bind="{ group: { name: 'form', pull: 'clone', put: false}, ghostClass: '#luckysheet', handle: '.drag-option' }"
        @end="endDraggable" :clone="cloneFunc">
        <template #item="{ element: option, index: idx }">
          <div class="drag-option" style="cursor: move;">{{option.text}}</div>
        </template>
      </draggable>
    </div>
    <div id="luckysheet"></div>
  </div>
  
  <div v-show="isMaskShow" id="tip">Downloading</div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { exportExcel } from '../utils/export'
import { isFunction } from '../utils/is'
// import LuckyExcel from 'luckyexcel'
import draggable from "vuedraggable";

const isMaskShow = ref(false)
const selected = ref('')
const jsonData = ref({})
const options = ref([
  { type: 'range',text: 'range------Money Manager.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx' },
  {
    type: 'cell',text: 'cell------Activity costs tracker.xlsx',
    value: 'https://minio.cnbabylon.com/public/luckysheet/Activity%20costs%20tracker.xlsx',
  },
  {
    type: 'range',text: 'range------House cleaning checklist.xlsx',
    value: 'https://minio.cnbabylon.com/public/luckysheet/House%20cleaning%20checklist.xlsx',
  },
  {
    type: 'cell',text: 'cell------Student assignment planner.xlsx',
    value: 'https://minio.cnbabylon.com/public/luckysheet/Student%20assignment%20planner.xlsx',
  },
  {
    type: 'range',text: 'range------Credit card tracker.xlsx',
    value: 'https://minio.cnbabylon.com/public/luckysheet/Credit%20card%20tracker.xlsx',
  },
  { type: 'range',text: 'range------Blue timesheet.xlsx', value: 'https://minio.cnbabylon.com/public/luckysheet/Blue%20timesheet.xlsx' },
  {
    type: 'range',text: 'range------Student calendar (Mon).xlsx',
    value: 'https://minio.cnbabylon.com/public/luckysheet/Student%20calendar%20%28Mon%29.xlsx',
  },
  {
    type: 'cell',text: 'cell------Blue mileage and expense report.xlsx',
    value: 'https://minio.cnbabylon.com/public/luckysheet/Blue%20mileage%20and%20expense%20report.xlsx',
  },
])

const defaultSheetData = ref([{
  "name": "Cell",
  "color": "",
  "index": 0,
  "status": 1,
  "order": 0,
  "hide": 0,
  "row": 40,
  "column": 20,
  "defaultRowHeight": 19,
  "defaultColWidth": 73,
  "celldata": [{
    "r": 1,
    "c": 0,
    "v": {
      "m": "【主题名称】",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "v": "【主题名称】",
      "ps": {
        "value": "{\"code\":\"zhutimingcheng\",\"name\":\"主题名称\",\"type\":\"Text\"}",
        "isshow": true
      }
    }
  }, {
    "r": 1,
    "c": 1,
    "v": {
      "m": "【数据源链接】",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "v": "【数据源链接】",
      "ps": {
        "value": "{\"code\":\"shujuyuanlianjie\",\"name\":\"数据源链接\",\"type\":\"Text\"}",
        "isshow": true
      }
    }
  }],
  "config": {
    "merge": {},
    "rowlen": {
      "0": 31,
      "1": 31,
      "2": 31,
      "3": 31,
      "4": 31,
      "5": 31,
      "6": 31,
      "7": 31,
      "8": 31,
      "9": 31,
      "10": 31,
      "11": 31,
      "12": 31,
      "13": 31,
      "14": 31,
      "15": 31,
      "16": 31,
      "17": 31,
      "18": 31,
      "19": 31,
      "20": 31,
      "21": 31,
      "22": 31,
      "23": 31,
      "24": 31,
      "25": 31,
      "26": 31,
      "27": 31,
      "28": 31,
      "29": 31,
      "30": 31,
      "31": 31,
      "32": 31,
      "33": 31,
      "34": 31,
      "35": 31,
      "36": 31,
      "37": 31,
      "38": 31,
      "39": 31
    },
    "columnlen": {
      "0": 116,
      "1": 116,
      "2": 116,
      "3": 116,
      "4": 116,
      "5": 116,
      "6": 116,
      "7": 116,
      "8": 116,
      "9": 116,
      "10": 116,
      "11": 116,
      "12": 116,
      "13": 116,
      "14": 116,
      "15": 116,
      "16": 116,
      "17": 116,
      "18": 116,
      "19": 116
    },
    "rowhidden": {},
    "colhidden": {},
    "borderInfo": [],
    "authority": {},
    "customWidth": {
      "0": 1
    },
    "customHeight": {
      "1": 1
    }
  },
  "scrollLeft": 0,
  "scrollTop": 0,
  "luckysheet_select_save": [{
    "left": 0,
    "width": 116,
    "top": 0,
    "height": 31,
    "left_move": 0,
    "width_move": 116,
    "top_move": 0,
    "height_move": 31,
    "row": [0, 0],
    "column": [0, 0],
    "row_focus": 0,
    "column_focus": 0
  }],
  "calcChain": [],
  "isPivotTable": false,
  "pivotTable": {},
  "filter_select": {},
  "filter": null,
  "luckysheet_alternateformat_save": [],
  "luckysheet_alternateformat_save_modelCustom": [],
  "luckysheet_conditionformat_save": {},
  "frozen": {},
  "chart": [],
  "zoomRatio": 1,
  "image": [],
  "showGridLines": 1,
  "dataVerification": {},
  "jfgird_select_save": [],
  "data": [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [{
      "m": "【主题名称】",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "v": "【主题名称】",
      "ps": {
        "value": "{\"code\":\"zhutimingcheng\",\"name\":\"主题名称\",\"type\":\"Text\"}",
        "isshow": true
      }
    }, {
      "m": "【数据源链接】",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "v": "【数据源链接】",
      "ps": {
        "value": "{\"code\":\"shujuyuanlianjie\",\"name\":\"数据源链接\",\"type\":\"Text\"}",
        "isshow": true
      }
    }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  ],
  "visibledatarow": [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 480, 512, 544, 576, 608, 640, 672, 704, 736, 768, 800, 832, 864, 896, 928, 960, 992, 1024, 1056, 1088, 1120, 1152, 1184, 1216, 1248, 1280],
  "visibledatacolumn": [117, 234, 351, 468, 585, 702, 819, 936, 1053, 1170, 1287, 1404, 1521, 1638, 1755, 1872, 1989, 2106, 2223, 2340],
  "ch_width": 2460,
  "rh_height": 1360,
  "luckysheet_selection_range": [],
  "images": {}
}])

const loadExcel = (evt) => {
  const files = evt.target.files
  if (files == null || files.length == 0) {
    alert('No files wait for import')
    return
  }

  let name = files[0].name
  let suffixArr = name.split('.'),
    suffix = suffixArr[suffixArr.length - 1]
  if (suffix != 'xlsx') {
    alert('Currently only supports the import of xlsx files')
    return
  }
  LuckyExcel.transformExcelToLucky(files[0], function (exportJson, luckysheetfile) {
    if (exportJson.sheets == null || exportJson.sheets.length == 0) {
      alert('Failed to read the content of the excel file, currently does not support xls files!')
      return
    }
    console.log('exportJson', exportJson)
    jsonData.value = exportJson

    isFunction(window?.luckysheet?.destroy) && window.luckysheet.destroy()

    window.luckysheet.create({
      container: 'luckysheet', //luckysheet is the container id
      showinfobar: false,
      data: exportJson.sheets,
      title: exportJson.info.name,
      userInfo: exportJson.info.name.creator,
    })
  })
}
const selectExcel = (evt) => {
  const value = selected.value
  const name = evt.target.options[evt.target.selectedIndex].innerText

  if (value == '') {
    return
  }
  isMaskShow.value = true

  LuckyExcel.transformExcelToLuckyByUrl(value, name, (exportJson, luckysheetfile) => {
    if (exportJson.sheets == null || exportJson.sheets.length == 0) {
      alert('Failed to read the content of the excel file, currently does not support xls files!')
      return
    }
    console.log('exportJson', exportJson)
    jsonData.value = exportJson

    isMaskShow.value = false

    isFunction(window?.luckysheet?.destroy) && window.luckysheet.destroy()

    window.luckysheet.create({
      container: 'luckysheet', //luckysheet is the container id
      showinfobar: false,
      data: exportJson.sheets,
      title: exportJson.info.name,
      userInfo: exportJson.info.name.creator,
    })
  })
}
const downloadExcel = () => {
  // const value = selected.value;;
  //
  // if(value.length==0){
  //     alert("Please select a demo file");
  //     return;
  // }
  //
  // var elemIF = document.getElementById("Lucky-download-frame");
  // if(elemIF==null){
  //     elemIF = document.createElement("iframe");
  //     elemIF.style.display = "none";
  //     elemIF.id = "Lucky-download-frame";
  //     document.body.appendChild(elemIF);
  // }
  // elemIF.src = value;
  exportExcel(luckysheet.getAllSheets(), '下载')
}


const props2 = __props;
let openeds = ref(["1"]);
let cellPs = reactive({});
let rightContentShow = ref(false);
let cellFormat = ref({});
let cloneCellFormat = ref({
  Time: false,
  timeFormat: "",
  Date: false,
  dateFormat: "",
  DateTime: false,
  dateTimeFormat: "",
  Num: false,
  amountFormat: false
});
let cellR = ref();
let cellC = ref();
let cutSelectCell = reactive({});
let isDraggable = ref(false);
let dragEndR = ref(0);
let dragEndC = ref(0);
let sidebarWidth = ref("");
let centerStyle = ref({});

const cellDragStopFn = (cell, position) => {
  console.log("-------400--------------cell", cell,position);
  dragEndR.value = position.r;
  dragEndC.value = position.c;
  isDraggable.value = true;
};


const clearCellContentFn = () => {
  cellFormat.value = {};
};

const cellClickFn = (event2) => {
  cellR.value = event2.r;
  cellC.value = event2.c;
  let sheet = event2.sheet;
  rightContentShow.value = false;
  cutSelectCell = Object.assign({}, sheet.data[cellR.value][cellC.value]);
  cellFormat.value = { ...cloneCellFormat.value };
  if (cutSelectCell && cutSelectCell.ps) {
    initCellFormat(cutSelectCell.ps);
  }
};

const initCellFormat = (ps) => {
  cellPs = Object.assign({}, JSON.parse(ps.value));
  if (!cellPs.formatMap) {
    cellPs.formatMap = {};
  }
  let formatMap = cellPs.formatMap;
  let type = cellPs.type;
  let needShowRightContent = ["Date", "DateTime", "Time", "Num"];
  if (needShowRightContent.includes(type)) {
    rightContentShow.value = true;
  }
  cellFormat.value[type] = true;
  let cellKey;
  if (type == "num") {
    cellKey = "amountFormat";
  } else {
    cellKey = type + "Format";
  }
  cellFormat.value[cellKey] = formatMap[cellKey] || "";
};
const dragItem = ref(undefined)
const cloneFunc = (subItem) => {
  dragItem.value = subItem;
};
const endDraggable = (subItem) => {
  if (!isDraggable.value) {
    return;
  }
  console.log('-------endDraggable--------',dragItem.value ,luckysheet)
  if (dragItem.value.type === 'cell') {
    let cell = {
      m: "\u3010" + dragItem.value.text + "\u3011",
      v: "\u3010" + dragItem.value.text + "\u3011",
      ps: {
        value: JSON.stringify(dragItem.value),
        isshow: true
      }
    };
    luckysheet.setCellValue(dragEndR.value, dragEndC.value, cell, null);
  }else if (dragItem.value.type === 'range'){
    const data = [
      [
        {
          "m": "value1",
          "ct": {
            "fa": "General",
            "t": "g"
          },
          "v": "value1"
        },
        {
          "m": "value3",
          "ct": {
            "fa": "General",
            "t": "g"
          },
          "v": "value3"
        }
      ],
      [
        {
          "m": "value2",
          "ct": {
            "fa": "General",
            "t": "g"
          },
          "v": "value2"
        },
        {
          "m": "value4",
          "ct": {
            "fa": "General",
            "t": "g"
          },
          "v": "value4"
        }
      ]
    ]
    luckysheet.setRangeValue(data,{range:{row:[dragEndR.value,dragEndR.value+1],column:[dragEndC.value,dragEndC.value+1]}})
  }
  
  isDraggable.value = false;
};
// !!! create luckysheet after mounted
onMounted(() => {
  luckysheet.create({
    container: "luckysheet",
    title: "Luckysheet Demo",
    lang: "zh",
    allowEdit: true,
    showinfobar: true,
    userInfo: {
      userImage:'https://yf-dev.rongzhuamao.com/media/public/avatar/logo.png', // 头像url
      userName:'绒爪猫' // 用户名
    },
    // data: defaultSheetData,
    hook: {
      cellDragStop: cellDragStopFn,
      clearCellContent: clearCellContentFn,
      cellClick: cellClickFn
    }
  })
})
</script>

<style scoped>
#luckysheet {
  height: calc(100vh - 40px);
  width: calc(100vw - 200px);
}

#uploadBtn {
  font-size: 16px;
}

#tip {
  position: absolute;
  z-index: 1000000;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>