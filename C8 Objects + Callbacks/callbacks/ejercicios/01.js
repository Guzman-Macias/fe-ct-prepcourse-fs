function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   return cb();

}
function HolaMundo(){
   return "saludo";

}
invocarCallback(HolaMundo);

module.exports = invocarCallback;
