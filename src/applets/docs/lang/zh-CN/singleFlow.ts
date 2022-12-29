export default {
  title: 'SingleFlow',
  content: [
    [
      {
        type: 'title',
        value: 'SingleFlow'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > singleFlow'
      },
      {
        type: 'text',
        value: '开启历史层级流向控制。（frameworks 程序卡专属配置）'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Types</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            interface FrameworksAppletConfig {
              singleFlow?: boolean
            }
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Details</h3>'
      },
      {
        type: 'text',
        value: '只允许程序卡的历史回退方向往 level 较小的程序卡回退，若在返回时，返回的程序卡 level 层级若大于或等于当前程序卡层级，则直接跳过该程序卡，继续返回到历史记录中更早的程序卡，直至条件符合。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Example</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            createApplication({
              applets: {
                frameworks: {
                  config: {
                    singleFlow: true
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>Notes</h3>'
      },
      {
        type: 'text',
        value: '例如从生成订单功能的程序卡到支付订单的程序卡付款成功后进入我的订单模块程序卡，其在完成后进行回退时可通过开启配置项并结合程序卡level规则，使其直接回到订单生程序卡，而无需经过订单完成过程中的各个程序卡。'
      }
    ]
  ]
}