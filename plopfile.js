const path = require("path")
const actionConfig = require("./templates/pathsConfig")
module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('lib', {
      description: '生成组件..',
      prompts: [{ // array of inquirer prompts
        type: 'confirm',
        name: 'componentType',
        message: '是否使用函数组件?'
      },{
        type: 'input',
        name: 'name',
        message: '请输入组件名称(支持大小写哈)~'
      }, {
        type: 'input',
        name: 'class',
        message: '请输入样式类名~'
      }],
      actions: function(data)  { // array of actions
        const isHookComponent = data.componentType
        console.log(isHookComponent, '------------')
        if (isHookComponent) { // 函数组件
          actionConfig[0].templateFile = path.join(__dirname, 'templates', 'func.hbs')
        }
        return actionConfig
      }
  });
};