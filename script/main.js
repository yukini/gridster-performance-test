$(function() {
  const gridster = $('.gridster ul')
    .gridster({
      widget_base_dimensions: ['auto', 30],
      autogenerate_stylesheet: true,
      min_cols: 1,
      max_cols: 20,
      widget_margins: [1, 1],
      resize: {
        enabled: true,
      },
    })
    .data('gridster')
  $('.gridster ul').css({ padding: '0' })

  const add = amounts => {
    for (let i = 0; i < amounts; i++) {
      gridster.add_widget(
        `<li class="new">
      <div class="gridster-box">
      <div class="handle-resize" >${i}</div>
      </div>
      </li>`,
        1,
        1,
      )
    }
  }

  console.time('add')
  add(300)
  console.timeEnd('add')

  const remove_all = () => {
    console.time('remove_all')
    gridster.remove_all_widgets()
    // $('.gridster ul').empty()
    console.timeEnd('remove_all')
  }

  const remove_all_then_add300 = () => {
    console.time('remove_all_then')
    gridster.remove_all_widgets()
    // $('.gridster ul').empty()
    console.timeEnd('remove_all_then')
    console.time('add')
    add(300)
    console.timeEnd('add')
  }

  document
    .getElementById('remove_all')
    .addEventListener('click', remove_all, false)
  document
    .getElementById('remove_all_then_add300')
    .addEventListener('click', remove_all_then_add300, false)
})
