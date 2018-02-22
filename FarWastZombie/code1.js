gdjs.GameOverCode = {};


gdjs.GameOverCode.GDGirl_95BaseObjects1= [];
gdjs.GameOverCode.GDGirl_95SpriteObjects1= [];
gdjs.GameOverCode.GDBCObjects1= [];
gdjs.GameOverCode.GDmaleObjects1= [];
gdjs.GameOverCode.GDPularDireitaObjects1= [];
gdjs.GameOverCode.GDPularEsquerdaObjects1= [];
gdjs.GameOverCode.GDfemaleObjects1= [];
gdjs.GameOverCode.GDBulletObjects1= [];
gdjs.GameOverCode.GDHUDObjects1= [];
gdjs.GameOverCode.GDObjetoNovoObjects1= [];
gdjs.GameOverCode.GDObjetoNovo2Objects1= [];
gdjs.GameOverCode.GDObjetoNovo4Objects1= [];
gdjs.GameOverCode.GDObjetoNovo3Objects1= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};

gdjs.GameOverCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameOverCode.GDGirl_95BaseObjects1.length = 0;
gdjs.GameOverCode.GDGirl_95SpriteObjects1.length = 0;
gdjs.GameOverCode.GDBCObjects1.length = 0;
gdjs.GameOverCode.GDmaleObjects1.length = 0;
gdjs.GameOverCode.GDPularDireitaObjects1.length = 0;
gdjs.GameOverCode.GDPularEsquerdaObjects1.length = 0;
gdjs.GameOverCode.GDfemaleObjects1.length = 0;
gdjs.GameOverCode.GDBulletObjects1.length = 0;
gdjs.GameOverCode.GDHUDObjects1.length = 0;
gdjs.GameOverCode.GDObjetoNovoObjects1.length = 0;
gdjs.GameOverCode.GDObjetoNovo2Objects1.length = 0;
gdjs.GameOverCode.GDObjetoNovo4Objects1.length = 0;
gdjs.GameOverCode.GDObjetoNovo3Objects1.length = 0;


{

gdjs.GameOverCode.GDObjetoNovo4Objects1.createFrom(runtimeScene.getObjects("ObjetoNovo4"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("ObjetoNovo4", gdjs.GameOverCode.GDObjetoNovo4Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase1", false);
}}

}

return;
}
gdjs['GameOverCode']= gdjs.GameOverCode;
