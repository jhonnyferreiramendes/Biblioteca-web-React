import toastr from "toastr";



toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "800",
  "hideDuration": "1000",
  "timeOut": "10000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function buildMenssage(titulo, mensagem, classe){
    toastr[classe](mensagem , titulo)
}
export function messageSucces(mensagem){
    buildMenssage("Sucesso", mensagem, "sucesso")
}

export  function messageErro(mensagem){
    buildMenssage("Erro", mensagem, "error")
}