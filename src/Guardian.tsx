import React from 'react';
export function Guardian({name='',symbol='',index=0,color='#8adeff'}:any){
 const p:any[]=[];const R=(x:number,y:number,w:number,h:number,c:string)=>p.push(<rect key={p.length} x={x} y={y} width={w} height={h} fill={c}/>);const O='#29223f',P='#fff2cf',B='#ff9cb9';
 const ball=(x:number,y:number,w:number,h:number,c:string)=>{R(x+2,y,w-4,h,O);R(x,y+2,w,h-4,O);R(x+2,y+2,w-4,h-4,c);R(x+4,y+3,w-8,2,P)};
 const face=(x=20,y=19)=>{R(x-7,y,3,5,O);R(x+4,y,3,5,O);R(x-7,y,1,2,'#fff');R(x+4,y,1,2,'#fff');R(x-11,y+5,4,2,B);R(x+7,y+5,4,2,B);R(x-2,y+7,4,1,O);R(x-1,y+8,2,1,O)};
 R(7,37,26,3,'#242443');R(4,36,3,1,'#555080');R(35,36,2,1,'#555080');
 const animal=/Ram|Bull|Lion|Cat|Fox|Goat|Boots|Beast/.test(symbol)||/Puss|Fox/.test(name);
 const plant=/Seed|Branches|Flexible/.test(symbol);
 const bug=/Crab|Scorpion|Song|Crest/.test(symbol)||/Grasshopper|Ant|Cock/.test(name);
 const spark=/Spark|Luma|Bolt|Gremlin/.test(name);
 if(animal){let fur=/Fox/.test(name)?'#f6aa67':/Beast/.test(symbol)?'#a9755a':/Lion/.test(symbol)?'#f4bc62':/Bull/.test(symbol)?'#b5bff1':/White Cat/.test(symbol)?'#fbfbff':/Cat|Boots/.test(symbol)?'#e5c9ad':'#f3e5ce';
  ball(9,22,23,14,fur);R(10,33,6,4,O);R(24,33,6,4,O);R(11,33,4,3,color);R(25,33,4,3,color);
  if(/Lion|Beast/.test(symbol)){ball(5,6,31,26,'#7a4a3a');R(5,9,3,4,'#ffcb78');R(32,25,3,5,'#ffcb78')}
  ball(7,10,27,22,fur);R(8,5,7,8,O);R(25,5,7,8,O);R(10,7,3,5,B);R(27,7,3,5,B);
  if(/Ram|Bull|Goat/.test(symbol)){R(3,5,5,10,O);R(4,6,3,7,P);R(32,5,5,10,O);R(33,6,3,7,P);R(5,13,5,3,P);R(29,13,5,3,P)}
  face();R(17,24,6,3,'#f0ccb6');R(19,25,2,2,O);R(12,29,16,2,color);R(17,30,5,3,color);
  if(/Goat/.test(symbol)){R(28,30,8,3,'#6fcca9');R(34,26,4,6,'#6fcca9')}
  if(/Beast/.test(symbol)){R(2,20,2,15,'#5fa56a');R(0,15,6,6,'#e0486c');R(1,16,3,3,'#ff8fae');R(30,26,7,5,'#e0486c');R(5,9,6,5,'#4a2c24');R(30,9,6,5,'#4a2c24')}if(/Boots/.test(symbol)){R(8,33,9,5,'#9e6253');R(23,33,10,5,'#9e6253');R(5,9,30,3,'#725481');R(13,3,16,6,color);R(30,4,2,7,P)}
 }else if(/Fish/.test(symbol)){ball(3,9,24,14,'#93d9e9');R(26,10,8,12,'#d78ddd');R(30,8,6,16,'#d78ddd');ball(13,25,22,12,'#d78ddd');R(6,27,9,8,'#93d9e9');R(7,25,4,12,'#93d9e9');R(11,15,2,4,O);R(10,15,1,1,P);R(9,19,3,1,B);R(27,29,2,4,O);R(26,29,1,1,P);R(24,33,3,1,B);R(14,13,3,2,P);R(25,28,3,2,P);
 }else if(plant){R(18,23,4,14,'#7fa472');ball(8,9,25,22,'#88ce98');R(5,15,7,4,'#68a882');R(29,16,7,5,'#68a882');R(11,6,7,6,'#9ddd9a');R(24,5,6,8,'#b5eaa7');face(20,17);R(13,34,14,3,'#987454');if(/Reed/.test(name)){R(23,3,2,14,'#d9d5a4');R(24,3,4,8,'#ecdeb3')}
 }else if(bug){ball(8,15,26,18,/Crab|Scorpion/.test(symbol)?'#f39aa2':'#b0d9a0');R(10,9,3,8,O);R(28,9,3,8,O);R(10,9,3,3,P);R(28,9,3,3,P);face(21,20);R(4,18,5,7,color);R(32,18,5,7,color);R(7,32,5,4,color);R(29,32,5,4,color);if(/Scorpion/.test(symbol)){R(34,25,4,8,'#dc93b0');R(35,19,3,8,'#dc93b0');R(33,16,5,4,P)}if(/Crest|Cock/.test(name+symbol)){R(18,8,6,7,'#ff7e97');R(27,25,9,3,'#ffd286')}
 }else if(spark||/Balance|Bagel/.test(symbol)){ball(7,9,27,25,color);R(8,31,7,5,O);R(26,31,7,5,O);R(9,32,5,3,P);R(27,32,5,3,P);face(20,20);R(17,12,6,4,P);R(19,10,2,8,P);R(4,21,4,7,color);R(34,21,4,7,color);
  if(/Tower|Crane/.test(symbol)){R(13,7,15,4,'#818acd');R(17,3,7,5,'#adb7e9');R(20,1,1,3,P)}
  if(/Bridge/.test(symbol)){R(10,7,3,14,P);R(28,7,3,14,P);R(10,10,21,2,P)}
  if(/Five/.test(symbol)){for(let i=0;i<5;i++){R(7+i*6,4+(i%2)*2,3,3,P)}}
  if(/Shoe/.test(symbol)){R(5,32,13,5,'#edb2cb');R(23,32,13,5,'#edb2cb');R(10,3,19,4,P)}
  if(/Boat/.test(symbol)){R(9,6,23,6,P);R(14,3,12,4,'#a8cde4');R(9,12,23,2,'#7599b6')}
  if(/Flame/.test(symbol)){R(14,4,13,8,'#ffbd72');R(17,1,6,5,'#ff9d79');R(19,5,3,7,P)}
  if(/Bagel/.test(symbol)){ball(5,8,29,25,'#e5aa73');R(16,16,8,8,'#8a666a');face(20,23);for(let i=0;i<6;i++)R(10+i*4,12+i%2,1,2,P)}
  if(/Balance/.test(symbol)){R(19,2,2,13,P);R(8,5,25,2,P);R(7,7,2,5,P);R(30,7,2,5,P);R(4,12,9,3,'#e5c378');R(27,12,9,3,'#e5c378')}
  if(/Paint/.test(symbol)){R(30,2,3,11,'#c58c77');R(28,1,7,4,'#ffbde2')}
  if(/Beat/.test(symbol)){R(5,30,31,4,'#c68fac');R(6,33,29,3,'#f4cb9e')}
  if(/Boat|Wave|Lake/.test(symbol)){R(5,34,32,2,'#9bddea');R(9,36,24,2,'#62a7c1')}
 }else{
  let skin=['#f3d0b1','#e5ad8c','#bd866c','#d8a18a'][index%4],hair=['#735067','#b98963','#493952','#dfc28f'][index%4];
  ball(10,24,22,13,color);R(10,35,8,3,O);R(24,35,8,3,O);R(5,25,5,8,skin);R(32,25,5,8,skin);ball(7,8,27,22,skin);R(8,7,25,5,hair);R(7,10,5,10,hair);R(28,10,6,13,hair);R(12,11,6,4,hair);face(21,18);R(17,30,8,2,P);R(20,32,2,2,P);
  if(/Giant/.test(symbol)){R(5,25,6,11,color);R(32,25,6,11,color);R(2,6,3,30,'#997c67');R(0,3,8,10,'#b39170');R(14,27,15,3,'#d1b39b')}
  if(/Glass slipper/.test(symbol)){R(2,31,9,4,'#b8e5ee');R(1,33,12,2,'#d8f2f3');R(13,33,16,3,'#ffe1e0')}
  if(/Spindle/.test(symbol)){R(2,21,3,16,'#d3a880');R(0,24,7,5,'#e2b9c4')}
  if(/Pebbles/.test(symbol)){R(2,34,4,2,'#c3b9c8');R(5,37,3,2,'#e4d8c4')}
  if(/Staff/.test(symbol)){R(2,1,3,36,'#bd9b7c')}
  if(/Friar/.test(symbol)){R(10,7,24,5,'#9a775f');R(12,29,20,2,'#e5ccaa');R(25,29,2,6,'#e5ccaa')}
  if(/Merchant/.test(symbol)){R(0,22,7,13,'#aa8a66');R(1,23,5,3,'#d9b58d')}
  if(/Crown|Knight/.test(symbol)){R(10,5,22,5,'#f0c96e');R(10,2,4,5,'#f0c96e');R(19,1,4,5,'#f0c96e');R(28,2,4,5,'#f0c96e');R(20,5,2,2,'#ed9aae')}
  if(/Wizard|Wand/.test(symbol)){R(9,6,25,4,'#ae91d5');R(13,2,16,4,'#ae91d5');R(18,0,7,3,'#ae91d5');R(14,26,16,5,P);R(17,30,10,4,P);R(4,14,2,23,'#ac8d72');R(2,12,6,4,'#ffdfa0')}
  if(/Red hood/.test(symbol)){R(5,7,7,22,'#da6689');R(28,7,7,22,'#da6689');R(8,4,25,5,'#f184a5');R(9,27,22,7,'#da6689');R(2,28,7,7,'#b08b68')}
  if(/Bow|Archer|Staff/.test(symbol)){R(3,10,2,28,'#c29a73');R(1,8,6,3,'#c29a73');R(0,10,1,21,P);R(11,5,23,3,'#7db491');R(17,1,15,5,'#7db491')}
  if(/Water|Lake/.test(symbol)){ball(1,26,9,11,'#93cae5');R(2,25,7,3,P);R(8,34,25,2,'#93cae5')}
  if(/Maiden/.test(symbol)){R(3,22,2,16,'#d8bd71');R(1,22,6,6,'#ffe0a3')}
  if(/Twins/.test(symbol)){ball(23,20,14,14,'#c1b0ea');R(26,24,2,3,O);R(32,24,2,3,O);R(27,30,6,1,B)}
  if(/Rose/.test(symbol)){R(2,24,2,13,'#5fa56a');R(0,18,6,6,'#e0486c');R(1,19,4,3,'#ff8fae');R(2,28,5,2,'#5fa56a');R(8,7,25,4,'#8a5a44');R(30,10,5,12,'#8a5a44')}
  if(/Golden hair/.test(symbol)){R(5,8,31,6,'#f7d35c');R(4,12,6,24,'#f7d35c');R(31,12,6,24,'#f7d35c');R(12,5,16,3,'#ff9fc4');R(14,3,3,3,'#fff2cf');R(22,3,3,3,'#9ee0b0')}
  if(/Donkey skin/.test(symbol)){R(6,6,28,6,'#8c8798');R(5,10,6,18,'#8c8798');R(29,10,6,18,'#8c8798');R(8,0,5,9,'#8c8798');R(28,0,5,9,'#8c8798');R(9,2,3,5,B);R(29,2,3,5,B);R(12,26,16,10,'#8c8798');R(15,30,10,3,'#ffd35a')}
  if(false){R(14,3,6,8,'#5b3f6f');R(18,0,5,6,'#5b3f6f');R(22,2,5,4,'#5b3f6f');R(5,22,6,3,'#a07bd3');R(30,22,6,3,'#a07bd3')}
  if(false){R(9,3,23,5,'#fff6f2');R(10,1,5,4,'#ffffff');R(18,0,5,4,'#ffffff');R(26,1,5,4,'#ffffff');R(12,3,2,2,'#ffc1d1');R(28,3,2,2,'#ffc1d1');R(2,8,3,28,'#e8f3ff');R(35,8,3,28,'#e8f3ff')}
  if(/Fine suit/.test(symbol)){R(9,3,23,4,'#3a3f8f');R(12,0,17,4,'#3a3f8f');R(26,0,4,9,'#ff9fc4');R(8,24,25,12,'#3a3f8f');R(19,26,3,10,'#f0c96e');R(15,28,2,2,'#f0c96e');R(24,28,2,2,'#f0c96e');R(15,32,2,2,'#f0c96e');R(24,32,2,2,'#f0c96e');R(1,22,5,12,'#7a5a8f');R(34,22,5,12,'#7a5a8f')}
 }
 R(2,3,3,1,P);R(3,2,1,3,P);R(37,13,2,1,color);R(38,12,1,3,color);
 return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" className="guardian-pixel" role="img" aria-label={`Original kawaii pixel ${name}`} shapeRendering="crispEdges">{p}</svg>
}
