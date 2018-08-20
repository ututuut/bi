export default {
  state: {
    type: [
      {
        type: 'com-sougn-base-layout-center',
        config: [
          {
            id:'comSougnBaseLayoutCenterWidth',
            value: '800px',
            help:'www.baidu.com',
            type:'text',
            label:'组件宽度'
          },{
            id:'comSougnBaseLayoutCenterHeight',
            value: '900px',
            help:'www.baidu.com',
            type:'text',
            label:'画布高度'
          },{
            id:'comSougnBaseLayoutCenterBackground',
            value: '#fff',
            help:'www.baidu.com',
            type:'color',
            label:'画布背景色'
          },{
            id:'comSougnBaseLayoutCenterPadding',
            value: '10px',
            help:'www.baidu.com',
            type:'text',
            label:'内边距'
          },{
            id:'comSougnBaseLayoutCenterMargin',
            value: '10px',
            help:'www.baidu.com',
            type:'text',
            label:'外边距'
          },{
            id:'comSougnBaseLayoutCenterBorder',
            value: '10px',
            help:'www.baidu.com',
            type:'text',
            label:'边框'
          }
        ]
      },
      {
        type: 'com-sougn-base-layout-row',
        config: [

        ]
      },
      {
        type: 'com-sougn-base-assembly-input-text',
        config: [
          {
            id:'comSougnBaseAssemblyInputTextValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'绑定值'
          },{
            id:'comSougnBaseAssemblyInputTextMaxlength',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'最大输入长度'
          },{
            id:'comSougnBaseAssemblyInputTextMinlength',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'最小输入长度'
          },{
            id:'comSougnBaseAssemblyInputTextPlaceholder',
            value: '请输入',
            help:'www.baidu.com',
            type:'text',
            label:'占位文本'
          },{
            id:'comSougnBaseAssemblyInputTextSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'尺寸'
          },{
            id:'comSougnBaseAssemblyInputTextPrefixIcon',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'头部图标'
          },{
            id:'comSougnBaseAssemblyInputTextSuffixIcon',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'尾部图标'
          },{
            id:'comSougnBaseAssemblyInputTextAutoComplete',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'自动补全'
          },{
            id:'comSougnBaseAssemblyInputTextClearable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否可清空'
          },{
            id:'comSougnBaseAssemblyInputTextDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'禁用'
          },{
            id:'comSougnBaseAssemblyInputTextType',
            value: 'text',
            help:'www.baidu.com',
            type:'text',
            label:'类型'
          },{
            id:'comSougnBaseAssemblyInputTextReadonly',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否只读'
          },{
            id:'comSougnBaseAssemblyInputTextAutofocus',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'自动获取焦点'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-font',
        config: [
          {
            id:'comSougnBaseAssemblyFontSize',
            value: '14px',
            help:'www.baidu.com',
            type:'text',
            label:'文字大小'
          },
          {
            id:'comSougnBaseAssemblyFontColor',
            value: '#232f11',
            help:'www.baidu.com',
            type:'color',
            label:'字体颜色'
          },
          {
            id:'comSougnBaseAssemblyTextAlign',
            value: 'left',
            help:'www.baidu.com',
            type:'text',
            label:'对齐方式'
          },
          {
            id:'comSougnBaseAssemblyContent',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'文字内容'
          },
          {
            id:'comSougnBaseAssemblyFontWeight',
            value: '400',
            help:'www.baidu.com',
            type:'text',
            label:'文本粗细'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-radio',
        config: [
          {
            id:'comSougnBaseAssemblyRadioOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblyRadioDefInputValue',
            value: '[{"label":"id1","value":"显示值","others":"others"}]',
            help:'www.baidu.com',
            type:'textarea',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyRadioConfigOption',
            value: '',
            options: [{"value":"sql","label":"sqlKey"},{"value":"data","label":"本地数据源"}],
            help:'www.baidu.com',
            type:'select',
            label:'配置值来源'
          },
          {
            id:'comSougnBaseAssemblyRadioConfigValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyRadioParameter',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'携带参数'
          }
          ,
          // {
          //   id:'comSougnBaseAssemblyRadioInputOption',
          //   value: '',
          //   options: [{"value":"sql","label":"sqlKey"},{"value":"data","label":"本地数据源"}],
          //   help:'www.baidu.com',
          //   type:'select',
          //   label:'选中值来源'
          // },
          // {
          //   id:'comSougnBaseAssemblyRadioInputBind',
          //   value: '',
          //   help:'www.baidu.com',
          //   type:'text',
          //   label:'选中值'
          // },
          {
            id:'comSougnBaseAssemblyRadioDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyRadioSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'尺寸'
          },
          {
            id:'comSougnBaseAssemblyRadioTextColor',
            value: '#FFF',
            help:'www.baidu.com',
            type:'color',
            label:'激活文本颜色'
          },
          {
            id:'comSougnBaseAssemblyRadioFill',
            value: '#409EFF',
            help:'www.baidu.com',
            type:'color',
            label:'填充颜色'
          },
          {
            id:'comSougnBaseAssemblyRadioBorder',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'显示边框'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-checkbox',
        config: [
          {
            id:'comSougnBaseAssemblyCheckboxOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblyCheckboxDefInputValue',
            value: '[{"label":"id1","value":"显示值","others":"others"}]',
            help:'www.baidu.com',
            type:'textarea',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyCheckboxConfigOption',
            value: '',
            options: [{"value":"sql","label":"sqlKey"},{"value":"data","label":"本地数据源"}],
            help:'www.baidu.com',
            type:'select',
            label:'配置值来源'
          },
          {
            id:'comSougnBaseAssemblyCheckboxConfigValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyCheckboxParameter',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'携带参数'
          },
          {
            id:'comSougnBaseAssemblyCheckboxDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyCheckboxSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'尺寸'
          },
          {
            id:'comSougnBaseAssemblyCheckboxTextColor',
            value: '#FFF',
            help:'www.baidu.com',
            type:'color',
            label:'激活文本颜色'
          },
          {
            id:'comSougnBaseAssemblyCheckboxFill',
            value: '#409EFF',
            help:'www.baidu.com',
            type:'color',
            label:'填充颜色'
          },
          {
            id:'comSougnBaseAssemblyCheckboxBorder',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'显示边框'
          },
          {
            id:'comSougnBaseAssemblyCheckboxMin',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'最小数量'
          },
          {
            id:'comSougnBaseAssemblyCheckboxMax',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'最大数量'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-select',
        config: [
          {
            id:'comSougnBaseAssemblySelectOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblySelectDefInputValue',
            value: '[{"label":"id1","value":"显示值","others":"others"}]',
            help:'www.baidu.com',
            type:'textarea',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblySelectConfigOption',
            value: '',
            options: [{"value":"sql","label":"sqlKey"},{"value":"data","label":"本地数据源"}],
            help:'www.baidu.com',
            type:'select',
            label:'配置值来源'
          },
          {
            id:'comSougnBaseAssemblySelectConfigValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblySelectParameter',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'携带参数'
          },
          {
            id:'comSougnBaseAssemblySelectDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblySelectSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'尺寸'
          },
          {
            id:'comSougnBaseAssemblySelectClearable',
            value: '',
            help:'www.baidu.com',
            type:'switch',
            label:'清空选项'
          },
          {
            id:'comSougnBaseAssemblySelectCollapseTags',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'展示形式'
          },
          {
            id:'comSougnBaseAssemblySelectAutoComplete',
            value: 'off',
            help:'www.baidu.com',
            type:'text',
            label:'autocomplete 属性'
          },
          {
            id:'comSougnBaseAssemblySelectPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'占位符'
          },
          {
            id:'comSougnBaseAssemblySelectFilterable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否可搜索'
          },
          {
            id:'comSougnBaseAssemblySelectAllowCreate',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'创建新条目'
          },
          {
            id:'comSougnBaseAssemblySelectNoDataText',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'选项为空时显示的文字'
          },
          {
            id:'comSougnBaseAssemblySelectDefaultFirstOption',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'回车确认'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-switch',
        config: [
          {
            id:'comSougnBaseAssemblySwitchOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblySwitchDefInputValue',
            value: true,
            help:'www.baidu.com',
            type:'switch',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblySwitchConfigOption',
            value: '',
            options: [{"value":"sql","label":"sqlKey"},{"value":"data","label":"本地数据源"}],
            help:'www.baidu.com',
            type:'select',
            label:'配置值来源'
          },
          {
            id:'comSougnBaseAssemblySwitchConfigValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblySwitchParameter',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'携带参数'
          },
          {
            id:'comSougnBaseAssemblySwitchDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblySwitchWidth',
            value: '40',
            help:'www.baidu.com',
            type:'text',
            label:'宽度'
          },
          {
            id:'comSougnBaseAssemblySwitchActiveIconClass',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'图标的类名'
          },
          {
            id:'comSougnBaseAssemblySwitchInactiveIconClass',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'图标的类名'
          },
          {
            id:'comSougnBaseAssemblySwitchActiveText',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'打开时的文字描述'
          },
          {
            id:'comSougnBaseAssemblySwitchInactiveText',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'关闭时的文字描述'
          },
          {
            id:'comSougnBaseAssemblySwitchActiveValue',
            value: 'true',
            help:'www.baidu.com',
            type:'text',
            label:'打开时的值'
          },
          {
            id:'comSougnBaseAssemblySwitchInactiveValue',
            value: 'false',
            help:'www.baidu.com',
            type:'text',
            label:'关闭时的值'
          },
          {
            id:'comSougnBaseAssemblySwitchActiveColor',
            value: '#409EFF',
            help:'www.baidu.com',
            type:'color',
            label:'打开时的背景色'
          },
          {
            id:'comSougnBaseAssemblySwitchInactiveColor',
            value: '#C0CCDA',
            help:'www.baidu.com',
            type:'color',
            label:'关闭时的背景色'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-slider',
        config: [
          {
            id:'comSougnBaseAssemblySliderOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'绑定值'
          },
          {
            id:'comSougnBaseAssemblySliderDefInputValue',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'默认值'
          },
          {
            id:'comSougnBaseAssemblySliderInputBind',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输入绑定值'
          },
          {
            id:'comSougnBaseAssemblySliderDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblySliderMin',
            value: '0',
            help:'www.baidu.com',
            type:'text',
            label:'最小值'
          },
          {
            id:'comSougnBaseAssemblySliderMax',
            value: '100',
            help:'www.baidu.com',
            type:'text',
            label:'最大值'
          },
          {
            id:'comSougnBaseAssemblySliderDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblySliderStep',
            value: '1',
            help:'www.baidu.com',
            type:'text',
            label:'步长'
          },
          {
            id:'comSougnBaseAssemblySliderShowInput',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'显示输入框'
          },
          {
            id:'comSougnBaseAssemblySliderShowInputControls',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'输入框控制按钮'
          },
          {
            id:'comSougnBaseAssemblySliderInputSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'输入框的尺寸'
          },
          {
            id:'comSougnBaseAssemblySliderShowStops',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否显示间断点'
          },
          {
            id:'comSougnBaseAssemblySliderShowTooltip',
            value: true,
            help:'www.baidu.com',
            type:'switch',
            label:'是否显示 tooltip'
          },
          {
            id:'comSougnBaseAssemblySliderRange',
            value: true,
            help:'www.baidu.com',
            type:'switch',
            label:'是否为范围选择'
          },
          {
            id:'comSougnBaseAssemblySliderVertical',
            value: true,
            help:'www.baidu.com',
            type:'switch',
            label:'是否竖向模式'
          },
          {
            id:'comSougnBaseAssemblySliderHeight',
            value: '',
            help:'www.baidu.com',
            type:'switch',
            label:'Slider 高度，竖向模式时必填'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-time-select',
        config: [
          {
            id:'comSougnBaseAssemblyTimeSelectOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectPickerOptions',
            value: "{\"start\":\"08:30\",\"step\":\"00:15\",\"end\":\"18:30\"}",
            help:'www.baidu.com',
            type:'textarea',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectReadonly',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'完全只读'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectEditable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'文本框可输入'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectClearable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否显示清除按钮'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'占位内容'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectAlign',
            value: 'left',
            help:'www.baidu.com',
            type:'text',
            label:'对齐方式'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectRangeSeparator',
            value: '-',
            help:'www.baidu.com',
            type:'text',
            label:'分隔符'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectDefaultValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'默认显示的时间'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectPrefixIcon',
            value: 'el-icon-time',
            help:'www.baidu.com',
            type:'text',
            label:'自定义头部图标的类名'
          },
          {
            id:'comSougnBaseAssemblyTimeSelectClearIcon',
            value: 'el-icon-circle-close',
            help:'www.baidu.com',
            type:'text',
            label:'自定义清空图标的类名'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-time-picker',
        config: [
          {
            id:'comSougnBaseAssemblyTimePickerOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblyTimePickerDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyTimePickerReadonly',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'完全只读'
          },
          {
            id:'comSougnBaseAssemblyTimePickerEditable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'文本框可输入'
          },
          {
            id:'comSougnBaseAssemblyTimePickerClearable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否显示清除按钮'
          },
          {
            id:'comSougnBaseAssemblyTimePickerSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyTimePickerPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'占位内容'
          },
          {
            id:'comSougnBaseAssemblyTimePickerAlign',
            value: 'left',
            help:'www.baidu.com',
            type:'text',
            label:'对齐方式'
          },
          {
            id:'comSougnBaseAssemblyTimePickerRangeSeparator',
            value: '-',
            help:'www.baidu.com',
            type:'text',
            label:'分隔符'
          },
          {
            id:'comSougnBaseAssemblyTimePickerDefaultValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'默认显示的时间'
          },
          {
            id:'comSougnBaseAssemblyTimePickerPrefixIcon',
            value: 'el-icon-time',
            help:'www.baidu.com',
            type:'text',
            label:'自定义头部图标的类名'
          },
          {
            id:'comSougnBaseAssemblyTimePickerClearIcon',
            value: 'el-icon-circle-close',
            help:'www.baidu.com',
            type:'text',
            label:'自定义清空图标的类名'
          },
          {
            id:'comSougnBaseAssemblyTimePickerStartPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'开始日期的占位内容'
          },
          {
            id:'comSougnBaseAssemblyTimePickerEndPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'结束日期的占位内容'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-date-picker',
        config: [
          {
            id:'comSougnBaseAssemblyDatePickerOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblyDatePickerDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyDatePickerReadonly',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'完全只读'
          },
          {
            id:'comSougnBaseAssemblyDatePickerEditable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'文本框可输入'
          },
          {
            id:'comSougnBaseAssemblyDatePickerClearable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否显示清除按钮'
          },
          {
            id:'comSougnBaseAssemblyDatePickerSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyDatePickerPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'占位内容'
          },
          {
            id:'comSougnBaseAssemblyDatePickerAlign',
            value: 'left',
            help:'www.baidu.com',
            type:'text',
            label:'对齐方式'
          },
          {
            id:'comSougnBaseAssemblyDatePickerFormat',
            value: 'yyyy-MM-dd',
            help:'www.baidu.com',
            type:'text',
            label:'输入框中的格式'
          },
          {
            id:'comSougnBaseAssemblyDatePickerType',
            value: 'date',
            help:'www.baidu.com',
            type:'text',
            label:'显示类型'
          },
          {
            id:'comSougnBaseAssemblyDatePickerRangeSeparator',
            value: '-',
            help:'www.baidu.com',
            type:'text',
            label:'分隔符'
          },
          {
            id:'comSougnBaseAssemblyDatePickerDefaultValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'默认显示的时间'
          },
          {
            id:'comSougnBaseAssemblyDatePickerPrefixIcon',
            value: 'el-icon-time',
            help:'www.baidu.com',
            type:'text',
            label:'自定义头部图标的类名'
          },
          {
            id:'comSougnBaseAssemblyDatePickerClearIcon',
            value: 'el-icon-circle-close',
            help:'www.baidu.com',
            type:'text',
            label:'自定义清空图标的类名'
          },
          {
            id:'comSougnBaseAssemblyDatePickerStartPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'开始日期的占位内容'
          },
          {
            id:'comSougnBaseAssemblyDatePickerEndPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'结束日期的占位内容'
          },
          {
            id:'comSougnBaseAssemblyDatePickerUnlinkPanels',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'在范围选择器里取消两个日期面板之间的联动'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-date-time-picker',
        config: [
          {
            id:'comSougnBaseAssemblyDateTimePickerOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'绑定值'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerDefInputValue',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'默认值'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerInputBind',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输入绑定值'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerDisabled',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerReadonly',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'完全只读'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerEditable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'文本框可输入'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerClearable',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'是否显示清除按钮'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerSize',
            value: 'mini',
            help:'www.baidu.com',
            type:'text',
            label:'是否禁用'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'占位内容'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerAlign',
            value: 'left',
            help:'www.baidu.com',
            type:'text',
            label:'对齐方式'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerFormat',
            value: 'yyyy-MM-dd',
            help:'www.baidu.com',
            type:'text',
            label:'输入框中的格式'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerType',
            value: 'date',
            help:'www.baidu.com',
            type:'text',
            label:'显示类型'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerRangeSeparator',
            value: '-',
            help:'www.baidu.com',
            type:'text',
            label:'分隔符'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerDefaultValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'默认显示的时间'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerPrefixIcon',
            value: 'el-icon-time',
            help:'www.baidu.com',
            type:'text',
            label:'自定义头部图标的类名'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerClearIcon',
            value: 'el-icon-circle-close',
            help:'www.baidu.com',
            type:'text',
            label:'自定义清空图标的类名'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerStartPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'开始日期的占位内容'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerEndPlaceholder',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'结束日期的占位内容'
          },
          {
            id:'comSougnBaseAssemblyDateTimePickerUnlinkPanels',
            value: false,
            help:'www.baidu.com',
            type:'switch',
            label:'在范围选择器里取消两个日期面板之间的联动'
          }
        ]
      },
      {
        type: 'com-sougn-base-assembly-line',
        config: [
          {
            id:'comSougnBaseAssemblyRadioOutputValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'输出绑定值'
          },
          {
            id:'comSougnBaseAssemblyRadioDefInputValue',
            value: '[{"label":"id1","value":"显示值","others":"others"}]',
            help:'www.baidu.com',
            type:'textarea',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyRadioConfigOption',
            value: '',
            options: [{"value":"sql","label":"sqlKey"},{"value":"data","label":"本地数据源"}],
            help:'www.baidu.com',
            type:'select',
            label:'配置值来源'
          },
          {
            id:'comSougnBaseAssemblyRadioConfigValue',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'配置值'
          },
          {
            id:'comSougnBaseAssemblyRadioParameter',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'携带参数'
          },
          {
            id:'comSougnBaseAssemblyLineSettings',
            value: '',
            help:'www.baidu.com',
            type:'textarea',
            label:'配置项'
          },{
            id:'comSougnBaseAssemblyLineWidth',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'宽度'
          },{
            id:'comSougnBaseAssemblyLineHeight',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'高度'
          },{
            id:'comSougnBaseAssemblyLineEvents',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'事件绑定'
          },{
            id:'comSougnBaseAssemblyLineInitOptions',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'init 附加参数'
          },{
            id:'comSougnBaseAssemblyLineTooltipVisible',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'是否显示提示框'
          },{
            id:'comSougnBaseAssemblyLineLegendVisible',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'是否显示图例'
          },{
            id:'comSougnBaseAssemblyLineTheme',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'自定义主题'
          },{
            id:'comSougnBaseAssemblyLineThemeName',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'自定义主题名称'
          },{
            id:'comSougnBaseAssemblyLineJudgeWidth',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'是否处理生成图表时的宽度问题'
          },{
            id:'comSougnBaseAssemblyLineWidthChangeDelay',
            value: '',
            help:'www.baidu.com',
            type:'text',
            label:'容器宽度变化的延迟'
          }
        ]
      }
    ]
  }
}
