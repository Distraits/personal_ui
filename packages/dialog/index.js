import PDialog from "./src/dialog";

PDialog.install=function (Vue){
    Vue.component(PDialog.name,PDialog)
}

export default PDialog;
