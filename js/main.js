var valores_tec = []
var valores_ts = []

$('.inserir-tec').click(function(){
  var $tec = $('#tec')

  if ($tec.val() != '') {
    $('.span-tec').append(`${$tec.val()}, `)
    valores_tec.push($tec.val())
    $tec.val('')
  }
})

$('.inserir-ts').click(function(){
  var $ts = $('#ts')

  if ($ts.val() != '') {
    $('.span-ts').append(`${$ts.val()}, `)
    valores_ts.push($ts.val())
    $ts.val('')
  }
})
