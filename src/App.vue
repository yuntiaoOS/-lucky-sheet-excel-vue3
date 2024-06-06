<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import LuckySheet from './components/LuckySheet.vue'
import codemirror from './components/codemirror.vue'
import MRSheet from './components/MRSheet.vue'
import { XMReport } from './components/manner-report.ts'
import { ref } from 'vue';

const reportName = ref("好的吧给对方说过")
const menuList = ref([{
			"label": "主题数据模型",
			"fieldList": [{
					"code": "createdOn",
					"name": "创建时间",
					"type": "DateTime"
				},
				{
					"code": "createdBy",
					"name": "创建用户",
					"type": "Reference"
				},
				{
					"code": "modifiedOn",
					"name": "最近修改时间",
					"type": "DateTime"
				},
				{
					"code": "modifiedBy",
					"name": "修改用户",
					"type": "Reference"
				},
				{
					"code": "ownerUser",
					"name": "所属用户",
					"type": "Reference"
				},
				{
					"code": "ownerDepartment",
					"name": "所属部门",
					"type": "Reference"
				},
				{
					"code": "zhutimingcheng",
					"name": "主题名称",
					"type": "Text"
				},
				{
					"code": "zhutimiaoshu",
					"name": "主题描述",
					"type": "TextArea"
				},
				{
					"code": "bianma",
					"name": "编码",
					"type": "Text"
				},
				{
					"code": "shujuyuanleixing",
					"name": "数据源类型",
					"type": "Option"
				},
				{
					"code": "shujuyuanlianjie",
					"name": "数据源链接",
					"type": "Text"
				},
				{
					"code": "zhanghao",
					"name": "账号",
					"type": "Text"
				},
				{
					"code": "mima",
					"name": "密码",
					"type": "Text"
				},
				{
					"code": "approvalConfigId",
					"name": "审批流程",
					"type": "Reference"
				},
				{
					"code": "approvalStatus",
					"name": "审批状态",
					"type": "Status"
				},
				{
					"code": "lastApprovedBy",
					"name": "最近审批人",
					"type": "Reference"
				},
				{
					"code": "lastApprovedOn",
					"name": "最近审批时间",
					"type": "DateTime"
				},
				{
					"code": "lastApprovalRemark",
					"name": "最近审批批注",
					"type": "TextArea"
				}
			]
		},
		{
			"label": "专题数据模型",
			"fieldList": [{
					"code": "Zhuantishujumoxing.createdOn",
					"name": "创建时间",
					"type": "DateTime"
				},
				{
					"code": "Zhuantishujumoxing.createdBy",
					"name": "创建用户",
					"type": "Reference"
				},
				{
					"code": "Zhuantishujumoxing.modifiedOn",
					"name": "最近修改时间",
					"type": "DateTime"
				},
				{
					"code": "Zhuantishujumoxing.modifiedBy",
					"name": "修改用户",
					"type": "Reference"
				},
				{
					"code": "Zhuantishujumoxing.ownerUser",
					"name": "所属用户",
					"type": "Reference"
				},
				{
					"code": "Zhuantishujumoxing.ownerDepartment",
					"name": "所属部门",
					"type": "Reference"
				},
				{
					"code": "Zhuantishujumoxing.zhutimingcheng",
					"name": "专题名称",
					"type": "Text"
				},
				{
					"code": "Zhuantishujumoxing.zhutimiaoshu",
					"name": "专题描述",
					"type": "TextArea"
				},
				{
					"code": "Zhuantishujumoxing.bianma",
					"name": "编码",
					"type": "Text"
				},
				{
					"code": "Zhuantishujumoxing.shujuyuanleixing",
					"name": "数据源类型",
					"type": "Option"
				},
				{
					"code": "Zhuantishujumoxing.shujuyuanlianjie",
					"name": "数据源链接",
					"type": "Text"
				},
				{
					"code": "Zhuantishujumoxing.zhanghao",
					"name": "账号",
					"type": "Text"
				},
				{
					"code": "Zhuantishujumoxing.mima",
					"name": "密码",
					"type": "Text"
				},
				{
					"code": "Zhuantishujumoxing.approvalConfigId",
					"name": "审批流程",
					"type": "Reference"
				},
				{
					"code": "Zhuantishujumoxing.approvalStatus",
					"name": "审批状态",
					"type": "Status"
				},
				{
					"code": "Zhuantishujumoxing.lastApprovedBy",
					"name": "最近审批人",
					"type": "Reference"
				},
				{
					"code": "Zhuantishujumoxing.lastApprovedOn",
					"name": "最近审批时间",
					"type": "DateTime"
				},
				{
					"code": "Zhuantishujumoxing.lastApprovalRemark",
					"name": "最近审批批注",
					"type": "TextArea"
				},
				{
					"code": "Zhuantishujumoxing.suoshuzhuti",
					"name": "所属主题",
					"type": "Reference"
				}
			]
		}
	])
const sheets = ref([{
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
</script>

<template>
  <!-- <codemirror v-if="false" />
  <div v-else style="height: 50%;">
    <LuckySheet/>
  </div> -->
  <MRSheet v-if="false" />
  <XMReport 
    :reportName="reportName"
    :dbList="menuList"
    :sheets="sheets"/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
