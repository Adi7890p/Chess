/*
this code fullly written by Ak & its copyright :)... 
*/

let flag=false,flag1=false;
let bp = [], str, strl = '', strl1 = '';
let bpc = 16, wpc = 16, kcpb, kcpw;
let token = [], checkpathl = [],token1=[];
let blc = [], whc = [];
let pec = ['b'];
let restrictw = [],restrictb = [];
let bl = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'];
let wh = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
let s, z, p, n = 1, t, c, position;
let a1 = 'a1', a2 = 'a2', a3 = 'a3', a4 = 'a4', a5 = 'a5', a6 = 'a6', a7 = 'a7', a8 = 'a8';
let b1 = 'b1', b2 = 'b2', b3 = 'b3', b4 = 'b4', b5 = 'b5', b6 = 'b6', b7 = 'b7', b8 = 'b8';
let c1 = 'c1', c2 = 'c2', c3 = 'c3', c4 = 'c4', c5 = 'c5', c6 = 'c6', c7 = 'c7', c8 = 'c8';
let d1 = 'd1', d2 = 'd2', d3 = 'd3', d4 = 'd4', d5 = 'd5', d6 = 'd6', d7 = 'd7', d8 = 'd8';
let e1 = 'e1', e2 = 'e2', e3 = 'e3', e4 = 'e4', e5 = 'e5', e6 = 'e6', e7 = 'e7', e8 = 'e8';
let f1 = 'f1', f2 = 'f2', f3 = 'f3', f4 = 'f4', f5 = 'f5', f6 = 'f6', f7 = 'f7', f8 = 'f8';
let g1 = 'g1', g2 = 'g2', g3 = 'g3', g4 = 'g4', g5 = 'g5', g6 = 'g6', g7 = 'g7', g8 = 'g8';
let h1 = 'h1', h2 = 'h2', h3 = 'h3', h4 = 'h4', h5 = 'h5', h6 = 'h6', h7 = 'h7', h8 = 'h8';


let temp1;
let sel = g1;
let checker;

let a1e = document.getElementById(a1), a2e = document.getElementById(a2), a3e = document.getElementById(a3), a4e = document.getElementById(a4), a5e = document.getElementById(a5), a6e = document.getElementById(a6), a7e = document.getElementById(a7), a8e = document.getElementById(a8);
let b1e = document.getElementById(b1), b2e = document.getElementById(b2), b3e = document.getElementById(b3), b4e = document.getElementById(b4), b5e = document.getElementById(b5), b6e = document.getElementById(b6), b7e = document.getElementById(b7), b8e = document.getElementById(b8);
let c1e = document.getElementById(c1), c2e = document.getElementById(c2), c3e = document.getElementById(c3), c4e = document.getElementById(c4), c5e = document.getElementById(c5), c6e = document.getElementById(c6), c7e = document.getElementById(c7), c8e = document.getElementById(c8);
let d1e = document.getElementById(d1), d2e = document.getElementById(d2), d3e = document.getElementById(d3), d4e = document.getElementById(d4), d5e = document.getElementById(d5), d6e = document.getElementById(d6), d7e = document.getElementById(d7), d8e = document.getElementById(d8);
let e1e = document.getElementById(e1), e2e = document.getElementById(e2), e3e = document.getElementById(e3), e4e = document.getElementById(e4), e5e = document.getElementById(e5), e6e = document.getElementById(e6), e7e = document.getElementById(e7), e8e = document.getElementById(e8);
let f1e = document.getElementById(f1), f2e = document.getElementById(f2), f3e = document.getElementById(f3), f4e = document.getElementById(f4), f5e = document.getElementById(f5), f6e = document.getElementById(f6), f7e = document.getElementById(f7), f8e = document.getElementById(f8);
let g1e = document.getElementById(g1), g2e = document.getElementById(g2), g3e = document.getElementById(g3), g4e = document.getElementById(g4), g5e = document.getElementById(g5), g6e = document.getElementById(g6), g7e = document.getElementById(g7), g8e = document.getElementById(g8);
let h1e = document.getElementById(h1), h2e = document.getElementById(h2), h3e = document.getElementById(h3), h4e = document.getElementById(h4), h5e = document.getElementById(h5), h6e = document.getElementById(h6), h7e = document.getElementById(h7), h8e = document.getElementById(h8);

let whcb = document.getElementById('wh');
let blcb = document.getElementById('bl');


let bp1 = document.createElement("i");
bp1.setAttribute("class", "fa-solid fa-chess-pawn");
bp1.style.color = '#403f3f';
g1e.append(bp1);
let bp2 = document.createElement("i");
bp2.setAttribute("class", "fa-solid fa-chess-pawn");
bp2.style.color = '#403f3f';
g2e.append(bp2);
let bp3 = document.createElement("i");
bp3.setAttribute("class", "fa-solid fa-chess-pawn");
bp3.style.color = '#403f3f';
g3e.append(bp3);
let bp4 = document.createElement("i");
bp4.setAttribute("class", "fa-solid fa-chess-pawn");
bp4.style.color = '#403f3f';
g4e.append(bp4);
let bp5 = document.createElement("i");
bp5.setAttribute("class", "fa-solid fa-chess-pawn");
bp5.style.color = '#403f3f';
g5e.append(bp5);
let bp6 = document.createElement("i");
bp6.setAttribute("class", "fa-solid fa-chess-pawn");
bp6.style.color = '#403f3f';
g6e.append(bp6);
let bp7 = document.createElement("i");
bp7.setAttribute("class", "fa-solid fa-chess-pawn");
bp7.style.color = '#403f3f';
g7e.append(bp7);
let bp8 = document.createElement("i");
bp8.setAttribute("class", "fa-solid fa-chess-pawn");
bp8.style.color = '#403f3f';
g8e.append(bp8);

let br1 = document.createElement("i");
br1.setAttribute("class", "fa-solid fa-chess-rook");
br1.style.color = "#403f3f";
h1e.append(br1);
let bk1 = document.createElement("i");
bk1.setAttribute("class", "fa-solid fa-chess-knight");
bk1.style.color = "#403f3f";
h2e.append(bk1);
let bb1 = document.createElement("i");
bb1.setAttribute("class", "fa-solid fa-chess-bishop");
bb1.style.color = "#403f3f";
h3e.append(bb1);
let bq = document.createElement("i");
bq.setAttribute("class", "fa-solid fa-chess-queen");
bq.style.color = "#403f3f";
h4e.append(bq);
let bk = document.createElement("i");
bk.setAttribute("class", "fa-solid fa-chess-king");
bk.style.color = "#403f3f";
h5e.append(bk);
let bb2 = document.createElement("i");
bb2.setAttribute("class", "fa-solid fa-chess-bishop");
bb2.style.color = "#403f3f";
h6e.append(bb2);
let br2 = document.createElement("i");
let bk2 = document.createElement("i");
bk2.setAttribute("class", "fa-solid fa-chess-knight");
bk2.style.color = "#403f3f";
h7e.append(bk2);
br2.setAttribute("class", "fa-solid fa-chess-rook");
br2.style.color = "#403f3f";
h8e.append(br2);


let wp1 = document.createElement("i");
wp1.setAttribute("class", "fa-solid fa-chess-pawn");
wp1.style.color = '#ffffffe1';
b1e.append(wp1);
let wp2 = document.createElement("i");
wp2.setAttribute("class", "fa-solid fa-chess-pawn");
wp2.style.color = '#ffffffe1';
b2e.append(wp2);
let wp3 = document.createElement("i");
wp3.setAttribute("class", "fa-solid fa-chess-pawn");
wp3.style.color = '#ffffffe1';
b3e.append(wp3);
let wp4 = document.createElement("i");
wp4.setAttribute("class", "fa-solid fa-chess-pawn");
wp4.style.color = '#ffffffe1';
b4e.append(wp4);
let wp5 = document.createElement("i");
wp5.setAttribute("class", "fa-solid fa-chess-pawn");
wp5.style.color = '#ffffffe1';
b5e.append(wp5);
let wp6 = document.createElement("i");
wp6.setAttribute("class", "fa-solid fa-chess-pawn");
wp6.style.color = '#ffffffe1';
b6e.append(wp6);
let wp7 = document.createElement("i");
wp7.setAttribute("class", "fa-solid fa-chess-pawn");
wp7.style.color = '#ffffffe1';
b7e.append(wp7);
let wp8 = document.createElement("i");
wp8.setAttribute("class", "fa-solid fa-chess-pawn");
wp8.style.color = '#ffffffe1';
b8e.append(wp8);

let wr1 = document.createElement("i");
wr1.setAttribute("class", "fa-solid fa-chess-rook");
wr1.style.color = "#ffffffe1";
a1e.append(wr1);
let wk1 = document.createElement("i");
wk1.setAttribute("class", "fa-solid fa-chess-knight");
wk1.style.color = "#ffffffe1";
a2e.append(wk1);
let wb1 = document.createElement("i");
wb1.setAttribute("class", "fa-solid fa-chess-bishop");
wb1.style.color = "#ffffffe1";
a3e.append(wb1);
let wq = document.createElement("i");
wq.setAttribute("class", "fa-solid fa-chess-queen");
wq.style.color = "#ffffffe1";
a4e.append(wq);
let wk = document.createElement("i");
wk.setAttribute("class", "fa-solid fa-chess-king");
wk.style.color = "#ffffffe1";
a5e.append(wk);
let wb2 = document.createElement("i");
wb2.setAttribute("class", "fa-solid fa-chess-bishop");
wb2.style.color = "#ffffffe1";
a6e.append(wb2);
let wk2 = document.createElement("i");
wk2.setAttribute("class", "fa-solid fa-chess-knight");
wk2.style.color = "#ffffffe1";
a7e.append(wk2);
let wr2 = document.createElement("i");
wr2.setAttribute("class", "fa-solid fa-chess-rook");
wr2.style.color = "#ffffffe1";
a8e.append(wr2);

let wkc = [], bkc = [], d = [];

let a1l = ['w', wr1], a2l = ['w', wk1], a3l = ['w', wb1], a4l = ['w', wq], a5l = ['w', wk], a6l = ['w', wb2], a7l = ['w', wk2], a8l = ['w', wr2];
let b1l = ['w', wp1], b2l = ['w', wp2], b3l = ['w', wp3], b4l = ['w', wp4], b5l = ['w', wp5], b6l = ['w', wp6], b7l = ['w', wp7], b8l = ['w', wp8];
let c1l = [], c2l = [], c3l = [], c4l = [], c5l = [], c6l = [], c7l = [], c8l = [];
let d1l = [], d2l = [], d3l = [], d4l = [], d5l = [], d6l = [], d7l = [], d8l = [];
let e1l = [], e2l = [], e3l = [], e4l = [], e5l = [], e6l = [], e7l = [], e8l = [];
let f1l = [], f2l = [], f3l = [], f4l = [], f5l = [], f6l = [], f7l = [], f8l = [];
let g1l = ['b', bp1], g2l = ['b', bp2], g3l = ['b', bp3], g4l = ['b', bp4], g5l = ['b', bp5], g6l = ['b', bp6], g7l = ['b', bp7], g8l = ['b', bp8];
let h1l = ['b', br1], h2l = ['b', bk1], h3l = ['b', bb1], h4l = ['b', bq], h5l = ['b', bk], h6l = ['b', bb2], h7l = ['b', bk2], h8l = ['b', br2];
let ls=[];
let temp;
checkb(a = 'a', n = 5, c = 'w');
checkb(a = 'h', n = 5, c = 'b');
function changer() {
    if (pec.includes('b')) {
        pec = ['w'];
    }
    else {
        pec = ['b'];
    }
}
function restriction(kcp){    
    if(kcp==kcpw){
        restrictw=[];
        temp = pec;
        pec=['b']
        for(let i=0;i<bl.length;++i) {
            let idxe = bl[i].toString();
            let id = idxe+"l";
            console.log("var",id,idxe,i,wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            // //console.log("lslslsls",ls);
            a=idxe[0];
            n=parseInt(idxe[1]);
            console.log(a,n,"klopio");

            if(ls[1]==bq){
                bqs(a,n);
                console.log(idxe,"bq");
            }      
            else if(ls[1]==bb1||ls[1]==bb2){
                bbs(a,n);
                console.log(idxe,"bbs");
            }
            else if(ls[1]==br1||ls[1]==br2){
                brs(a,n);
                console.log(idxe,"brs");
            }
            else if(ls[1]==bk1||ls[1]==bk2){
                bkns(a,n);
                console.log(idxe,"bks");
            }
            else if(ls[1]==bk){
                bks(a,n);
            }
            else{
                    pawnq(a,n,'b');
            }
            for(j=0;j<bp.length;++j){
                restrictw.push(bp[j]);
            }
            // //console.log(bp,"bpnpnl");
            
            
            bp=[];
        }
        pec = temp;
        restrictw = restrictw.filter((value, index, self) => self.indexOf(value) === index);
        console.log(restrictw,"restricttion w");
    }
    if(kcp==kcpb){
        restrictb=[];
        temp = pec;
        pec=['w']
        for(let i=0;i<wh.length;++i) {
            let idxe = wh[i].toString();
            let id = idxe+"l";
            console.log("var",id,idxe,i,wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            // //console.log("lslslsls",ls);
            a=idxe[0];
            n=parseInt(idxe[1]);
            // //console.log(a,n,"klopio");

            if(ls[1]==wq){
                bqs(a,n);
                // //console.log(idxe,"wq");
            }      
            else if(ls[1]==wb1||ls[1]==wb2){
                bbs(a,n);
                // //console.log(idxe,"wqb");
            }
            else if(ls[1]==wr1||ls[1]==wr2){
                brs(a,n);
                // //console.log(idxe,"brs");
            }
            else if(ls[1]==wk1||ls[1]==wk2){
                bkns(a,n);
                // //console.log(idxe,"bks");
            }
            else if(ls[1]==wk){
                bks(a,n);
            }
            else{
                pawnq(a,n,'w');
            }
            for(j=0;j<bp.length;++j){
                restrictb.push(bp[j]);
            }
            // //console.log(bp,"bpnpnl");
            
            
            bp=[];
        }
        pec = temp;
        restrictb = restrictb.filter((value, index, self) => self.indexOf(value) === index);
        console.log(restrictb,"restricttion b");
    }
}
function checkhandler(idx,kcp){
    checker = idx;
    temp1 = kcp;
    document.getElementById(checker).style.boxShadow="inset 0px 0px 10px blue";
    // document.getElementById(checker).style.boxSizing = "border-box";
    document.getElementById(kcp).style.boxShadow=" inset 0px 0px 20px red";
    // document.getElementById(kcp).style.boxSizing = "border-box";
    bp=[];
    // //console.log(pec[0]=='w',pec[0]=='b');
    if(pec[0]=='b'){
        flag=true;
        changer();
        for(let i=0;i<wh.length;++i) {
            let idxe =wh[i].toString();
            let id = idxe+"l";
            // console.log("var",id,idxe,i,wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            //console.log("lslslsls",ls);
            a=idxe[0];
            n=parseInt(idxe[1]);
            //console.log(a,n,"klopio");

            if(ls[1]==wq){
                bqs(a,n);
                //console.log(idxe,"bq");
            }      
            else if(ls[1]==wb1||ls[1]==wb2){
                bbs(a,n);
                //console.log(idxe,"bbs");
            }
            else if(ls[1]==wr1||ls[1]==wr2){
                brs(a,n);
                //console.log(idxe,"brs");
            }
            else if(ls[1]==wk1||ls[1]==wk2){
                bkns(a,n);
                //console.log(idxe,"bks");
            }
            else if(ls[1]==wk){
                bks(a,n);
                for(j=0;j<bp.length;++j){
                    if(!(checkpathl.includes(bp[j]))){
                        flag1=true;
                        break;
                    }
                    if(flag1){
                        token1.push(idxe);
                        flag1=false;
                    }
                    
                }

                console.log(bp,"black king");
            }
            else{
                if(a=="b"){
                    //console.log(idxe,"lkjh");
                    wpis(a,n);
                }
                else if(ls[1]!=wk){
                    //console.log(idxe,"lkjqh");
                    wpss(a,n);
                }
            }
            

            //console.log(bp,"bpnpnl");
            for(j=0;j<bp.length;++j){
                if(checkpathl.includes(bp[j])){
                    flag1=true;
                    break;
                }
            }
            if(flag1){
                token1.push(idxe);
                console.log("tokennn",token1);
            }
            bp=[];
            flag1=false;
            
        }
        changer();
    }
    else if(pec[0]=='w'){
        changer();
        for(let i=0;i<bl.length;++i) {
            let idxe = bl[i].toString();
            let id = idxe+"l";
            //console.log("var",id,idxe,i,wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            //console.log("lslslsls",ls);
            a=idxe[0];
            n=parseInt(idxe[1]);
            //console.log(a,n,"klopio");

            if(ls[1]==bq){
                bqs(a,n);
                //console.log(idxe,"bq");
            }      
            else if(ls[1]==bb1||ls[1]==bb2){
                bbs(a,n);
                //console.log(idxe,"bbs");
            }
            else if(ls[1]==br1||ls[1]==br2){
                brs(a,n);
                //console.log(idxe,"brs");
            }
            else if(ls[1]==bk1||ls[1]==bk2){
                bkns(a,n);
                //console.log(idxe,"bks");
            }
            else if(ls[1]==bk){
                bks(a,n);
                for(j=0;j<bp.length;++j){
                    if(!(checkpathl.includes(bp[j]))){
                        flag1=true;
                        break;
                    }
                    if(flag1){
                        token1.push(idxe);
                        flag1=false;
                    }
                    
                }
                console.log(bp,"white king");
            }
            else{
                if(a=="g"){
                    //console.log(idxe,"lkjh");
                    bpis(a,n);
                }
                else if(ls[1]!=bk){
                    //console.log(idxe,"lkjqh");
                    bpss(a,n);
                }
            }

            //console.log(bp,"bpnpnl");
            for(j=0;j<bp.length;++j){
                if(checkpathl.includes(bp[j])){
                    flag1=true;
                    break;
                }
            }
            if(flag1){
                token1.push(idxe);
                flag=true;
                console.log("tokennn",token1);
            }
            bp=[];
            flag1=false;
            

        }
        changer();
    }
}

function checkremover(a,n){
    let rdf = a+n;
    if(token1.includes(rdf)){
        // flag=false;
        // token1=[];
        return true;
    }
    else{
        return false;
    }

}
function checkremoverd(kcp,checker){
    console.log('hjer',kcp,checker);
    document.getElementById(checker).style.boxShadow="inset 0px 0px 0px blue";
    // document.getElementById(checker).style.boxSizing = "border-box";
    document.getElementById(kcp).style.boxShadow=" inset 0px 0px 0px red";
    // document.getElementById(kcp).style.boxSizing = "border-box";`
    bp=[];
    // checker='';
    checkpathl=[];
}

function checkb(a, n, pec) {
    //white king
    //console.log("jio", a, n, pec, pec[0] == 'w', pec[0] == 'b');
    if (pec[0] == 'w') {
        //console.log("nj");
        kcpw = a + n;//discriibes kings palce
        //console.log("nj1", a, n, kcpw);
        // restriction(kcpb);
        kc(a, n);
        wkc = bp;
        bp = [];
    }
    //black king
    if (pec[0] == 'b') {
        kcpb = a + n;//discriibes kings palce
        // restriction(kcpw);
        kc(a, n);
        bkc = bp;
        bp = [];
        //console.log("nj2", a, n, kcpw);
    }
}
function checkpath(idx, kcp) {
    let checker_a = idx[0].charCodeAt();
    let checker_n = parseInt(idx[1]);
    let kcp_a = kcp[0].charCodeAt();
    let kcp_n = parseInt(kcp[1]);
    //console.log("here chekcj", checker_a, checker_n, kcp_a, kcp_n);
    if (checker_a > kcp_a && checker_n < kcp_n) {
        for (i = checker_a; i > kcp_a; i--) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n - (i - (checker_a )))));
            //console.log("here chekc1", checkpathl);
        }
    }
    else if (checker_a < kcp_a && checker_n > kcp_n) {//can be modify
        for (i = checker_a ; i < kcp_a; i++) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n - (i - (checker_a )))));
            //console.log("here chekc2", checkpathl);
        }
    }
    else if (checker_a < kcp_a && checker_n < kcp_n) {// can be modify
        for (i = checker_a ; i < kcp_a; i++) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n + (i - (checker_a )))));
            //console.log("here chekc3", checkpathl);
        }
    }
    else if (checker_a > kcp_a && checker_n > kcp_n) {
        for (i = checker_a ; i > kcp_a; i--) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n - Math.abs(i - (checker_a )))));
            //console.log("here chekc4", checkpathl);
        }
    }
    else if(checker_a > kcp_a && checker_n==kcp_n){
        for (i = checker_a ; i > kcp_a; i--) {
            checkpathl.push(String.fromCharCode(i) + checker_n);
            //console.log("here chekc5", checkpathl);
        }
    }
    else if(checker_a < kcp_a && checker_n==kcp_n){
        for (i = checker_a ; i < kcp_a; i++) {
            checkpathl.push(String.fromCharCode(i) + checker_n);
            //console.log("here chekc6", checkpathl);
        }
    }
    else if(checker_a == kcp_a && checker_n < kcp_n){
        for (i = checker_n ; i < kcp_n; i++) {
            checkpathl.push(String.fromCharCode(checker_a) + (checker_n+(i-checker_n)));
            //console.log("here chekc7", checkpathl);
        }
    }
    else if(checker_a == kcp_a && checker_n > kcp_n){
        for (i = checker_n ; i > kcp_n; i--) {
            checkpathl.push(String.fromCharCode(checker_a) + (checker_n-Math.abs(checker_n-i)));
            //console.log("here chekc8", checkpathl);
        }
    }
}
function kc(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    bp.push(s);
                }
            }
            else if (i == 1) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    bp.push(s);
                }
            }
            else if (i == 2) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    bp.push(s);
                }
            }
            else if (i == 3) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    bp.push(s);
                }
            }
            else if (i == 4) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    bp.push(s);
                }
            }
            else if (i == 5) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    bp.push(s);
                }
            }
            else if (i == 6) {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    bp.push(s);
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    bp.push(s);
                }
            }
        }
    }
    for (let i = 0; i < 4; ++i) {
        if (i == 0) {
            if ((a + 2) < 105 && (n - 1) > 0) {
                z = String.fromCharCode(a + 2);
                s = z + (n - 1);
                collison(ck = 'kn');

            }
            if ((a + 2) < 105 && (n + 1) < 9) {
                z = String.fromCharCode(a + 2);
                s = z + (n + 1);
                collison(ck = 'kn');
            }

        }
        else if (i == 1) {
            if ((a - 1) > 96 && (n - 2) > 0) {
                z = String.fromCharCode(a - 1);
                s = z + (n - 2);
                collison(ck = 'kn');
            }
            if ((a + 1) < 105 && (n - 2) > 0) {
                z = String.fromCharCode(a + 1);
                s = z + (n - 2);
                collison(ck = 'kn');
            }
        }
        else if (i == 2) {
            if ((a - 1) > 96 && (n + 2) < 9) {
                z = String.fromCharCode(a - 1);
                s = z + (n + 2);
                collison(ck = 'kn');
            }
            if ((a + 1) < 105 && (n + 2) < 9) {
                z = String.fromCharCode(a + 1);
                s = z + (n + 2);
                collison(ck = 'kn');
            }
        }
        else {
            if ((a - 2) > 96 && (n - 1) > 0) {
                z = String.fromCharCode(a - 2);
                s = z + (n - 1);
                collison(ck = 'kn');
            }
            if ((a - 2) > 96 && (n + 1) < 9) {
                z = String.fromCharCode(a - 2);
                s = z + (n + 1);
                collison(ck = 'kn');
            }

        }
    }


}

function tog(position) {
    if (bp.includes[position]) {
    }
    else {
        document.getElementById(sel).style.border = "solid 0px white";
        document.getElementById(sel).style.boxSizing = "border-box";
        for (i = 0; i < bp.length; i++) {
            //console.log(bp[i]);
            document.getElementById(bp[i]).style.border = "solid 0px cyan";
            document.getElementById(bp[i]).style.boxSizing = "border-box";
        }
        bp = [];

    }
}
function collison(ck) {
    //console.log(pec,"pecx");
    if (ck == 'rk' || ck == 'bs') {
        if (pec.includes('b')) {
            if (!bl.includes(s)) {
                //console.log(s);
                bp.push(s);
                //console.log("here col",bp);
                bp.push('enm');
            }
        }
        else if (pec.includes("w")) {
            if (!wh.includes(s)) {
                //console.log(s);
                bp.push(s);
                
                bp.push('enm');
            }
        }
    }
    else if (ck == "kn") {
        if (pec.includes('b')) {
            if (!bl.includes(s)) {
                //console.log(s);
                bp.push(s);
                if (wh.includes(s)) { bp.push('enm'); }
            }
        }
        else if (pec.includes("w")) {
            if (!wh.includes(s)) {
                //console.log(s);
                bp.push(s);
                if (wh.includes(s)) { bp.push('enm'); }
            }
        }
    }
    else if (ck == 'p') {
        if (pec.includes('b')) {
            for (i = bp.length - 2; i < bp.length; ++i) {
                if (bp[i] == 'enm') {
                    i = i + 1;
                }
                if (wh.includes(bp[i])) {
                    bp.splice(i + 1, 0, 'enm');

                }
                if (!wh.includes(bp[i])) {
                    bp.splice(i, 1);
                    i = i - 1;
                }

            }
        }
        else if (pec.includes('w')) {
            for (i = bp.length - 2; i < bp.length; ++i) {
                //console.log(bp);
                if (bp[i] == 'enm') {
                    i = i + 1;
                }
                if (bl.includes(bp[i])) {
                    bp.splice(i + 1, 0, 'enm');
                }
                if (!bl.includes(bp[i])) {
                    bp.splice(i, 1);
                    i = i - 1;
                }
            }
        }
    }

}
function pawnq(a,n,rd){
    a=(a.charCodeAt());
    if(rd=='b'){
        console.log("here b",(a - 1) > 96 && (a+1) < 105);
        if ((a - 1) > 96 && (a+1) < 105){
            if((n - 1) >= 1){
                bp.push(String.fromCharCode(a-1)+(n-1));
            }
            
            if((n + 1) <= 8){
                bp.push(String.fromCharCode(a-1)+(n+1));
            }
        }
    }
    else{
        console.log("here w",(a - 1) > 96 && (a+1) < 105);
        if ((a - 1) > 96 && (a+1) < 105){
            if((n - 1) >= 1){
                bp.push(String.fromCharCode(a+1)+(n-1));
            }
            
            if((n + 1) <= 8){
                bp.push(String.fromCharCode(a+1)+(n+1));
            }
        }
    }
}
function bpis(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i <= 2; ++i) {
        z = String.fromCharCode(a - i);
        s = z + n;
        if (i == 1) {
            bp.push(z + (n - 1));
            bp.push(z + (n + 1));
            
            collison('p');
        }
        if (!bl.includes(s) && !wh.includes(s)) {
            bp.push(s);
        }
        else {
            break;
        }
    }
    

}
function bpss(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i > 0; --i) {
        z = String.fromCharCode(a - i);
        s = z + n;
        if (!bl.includes(s) && !wh.includes(s)) {
            if (n >= 1 && n <= 8 && (a - i) > 96 && a < 105) {
                //console.log(s);
                bp.push(s);
            }
        }
        else {
            break;
        }
    }
    if ((n - 1) >= 0 && (n + 1) <= 9 && (a - i) > 96 && a < 105) {
        bp.push(z + (n - 1));
        bp.push(z + (n + 1));
        collison('p');
    }

}
function wpis(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i <= 2; ++i) {
        z = String.fromCharCode(a + i);
        s = z + n;
        if (i == 1) {
            bp.push(z + (n - 1));
            bp.push(z + (n + 1));
            collison('p');
            //console.log("bpn",bp);
        }

        if (!bl.includes(s) && !wh.includes(s)) {
            bp.push(s);
        }
        else {
            break;
        }

    }



}
function wpss(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i <= 1; ++i) {
        z = String.fromCharCode(a + i);
        s = z + n;
        if (!bl.includes(s) && !wh.includes(s)) {
            if (n >= 1 && n <= 8 && (a - i) > 96 && a < 105) {
                //console.log(s);
                bp.push(s);
            }
        }
        else {
            break;
        }
    }
    if ((n - 1) >= 1 && (n + 1) <= 8 && (a - 1) > 96 && a < 105) {
        bp.push(z + (n - 1));
        bp.push(z + (n + 1));
        collison('p');
    }
}
function bkns(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 4; ++i) {
        if (i == 0) {
            if ((a + 2) < 105 && (n - 1) > 0) {
                z = String.fromCharCode(a + 2);
                s = z + (n - 1);
                collison(ck = 'kn');

            }
            if ((a + 2) < 105 && (n + 1) < 9) {
                z = String.fromCharCode(a + 2);
                s = z + (n + 1);
                collison(ck = 'kn');
            }

        }
        else if (i == 1) {
            if ((a - 1) > 96 && (n - 2) > 0) {
                z = String.fromCharCode(a - 1);
                s = z + (n - 2);
                collison(ck = 'kn');
            }
            if ((a + 1) < 105 && (n - 2) > 0) {
                z = String.fromCharCode(a + 1);
                s = z + (n - 2);
                collison(ck = 'kn');
            }
        }
        else if (i == 2) {
            if ((a - 1) > 96 && (n + 2) < 9) {
                z = String.fromCharCode(a - 1);
                s = z + (n + 2);
                collison(ck = 'kn');
            }
            if ((a + 1) < 105 && (n + 2) < 9) {
                z = String.fromCharCode(a + 1);
                s = z + (n + 2);
                collison(ck = 'kn');
            }
        }
        else {
            if ((a - 2) > 96 && (n - 1) > 0) {
                z = String.fromCharCode(a - 2);
                s = z + (n - 1);
                collison(ck = 'kn');
            }
            if ((a - 2) > 96 && (n + 1) < 9) {
                z = String.fromCharCode(a - 2);
                s = z + (n + 1);
                collison(ck = 'kn');
            }

        }
    }
}
function brs(a, n) {
    //console.log("kjkjkjkj",a,n);
    a = a.charCodeAt();
    //console.log("kjkjkjkj",a,n);
    for (let i = 0; i < 4; i++) {
        //console.log("for i",i);
        for (let j = 0; j < 8; j++) {
            //console.log("for j",j);
            if (i == 0) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    //console.log("fg1",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    //console.log("fg2",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    //console.log("fg3",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    //console.log("fg4",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
        }
    }
}
function bbs(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
        }
    }
}
function bqs(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 3) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 4) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 5) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 6) {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
        }
    }
}
function bks(a, n) {
    console.log("1");
    a = a.charCodeAt();
    for (let i = 0; i < 8; i++) {
        console.log("2");
        for (let j = 0; j < 1; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 3) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 4) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 5) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 6) {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp,"bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
        }
    }
    if(pec=='w'){
        console.log(bp,"white");
        bp = bp.filter(value => !restrictw.includes(value));
        console.log(bp,"white");
    }
    else{
        console.log(bp,"black");
        bp = bp.filter(value => !restrictb.includes(value));
        console.log(bp,"black");
    }
    //final filteratiion on bp
    // finalpath(pec);
    console.log(bp,"king is king");
}
function finalpath(pec){
    if(pec=='b'){
        let tempa = kcpw;
        for(let k=0;k<bp.length;++k){
            let tempq=bp[k].toString();
            a = tempq[0];
            n = parseInt(tempq[1]);
            checkb(a,n,pec);  
            if (pec.includes('b')) {////////////////////////////here

            }
        }
        checkb(a=tempa[0],n=parseInt(tempa[1]),pec);
    }
    if(pec=='w'){
//////////////////////////////////here
        }
    
}
function handler(a, n, l, c) {
    if (l != []) {
        if (c == 'bp') {
            if (a == 'g') {
                tog(a + n);
                sel = a + n;
                bl.push(sel);
                pec ='b';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                bpis(a, n);
                //console.log("pawan",bp);
                if(flag){
                    bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
                }
                for (i = 0; i < bp.length; i++) {
                    if (bp[i + 1] == 'enm') {
                        // //console.log(bp,"pawn");
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                // //console.log(l[0],'lll');
                token.push(l[1]);
                token.push(l);
                // l.length=0;
            }
            else {
                tog(a + n);
                sel = a + n;
                bl.push(sel);
                pec = 'b';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                bpss(a, n);
                //console.log("pawan",bp);
                if(flag){
                    bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
                }
                for (i = 0; i < bp.length; i++) {
                    if (bp[i + 1] == 'enm') {
                        //console.log(bp);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                token.push(l[1]);
                token.push(l);
            }
        }
        if (c == 'wp') {
            if (a == 'b') {
                tog(a + n);
                sel = a + n;
                wh.push(sel);
                pec = 'w';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                wpis(a, n);
                //console.log(bp,"kokokokokoo");
                if(flag){
                    bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
                    //console.log(bp,"kokokokokoo");
                }
                for (i = 0; i < bp.length; i++) {
                    if (bp[i + 1] == 'enm') {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                token.push(l[1]);
                token.push(l);
                // l.length=0;
            }
            else {
                tog(a + n);
                sel = a + n;
                wh.push(sel);
                pec = 'w';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                wpss(a, n);
                if(flag){
                    bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
                }
                for (i = 0; i < bp.length; i++) {
                    if (bp[i + 1] == 'enm') {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                token.push(l[1]);
                token.push(l);
            }
        }
        if (c == 'knight') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bkns(a, n);
            if(flag){
                bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
            }
            for (i = 0; i < bp.length; i++) {
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                }
            }
            token.push(l[1]);
            token.push(l);
        }
        if (c == 'rook') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            brs(a, n);
            if(flag){
                bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
            }
            for (i = 0; i < bp.length; i++) {
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                }
            }
            token.push(l[1]);
            token.push(l);
        }
        if (c == 'bishop') {
            //console.log("hj");
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bbs(a, n);
            if(flag){
                bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
            }
            for (i = 0; i < bp.length; i++) {
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                }
            }
            token.push(l[1]);
            token.push(l);
        }
        if (c == 'queen') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bqs(a, n);
            if(flag){
                bp = bp.filter(value => checkpathl.includes(value) || value=== 'enm');
            }
            for (i = 0; i < bp.length; i++) {
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                }
            }
            token.push(l[1]);
            token.push(l);
            //console.log("queen out", token);
        }
        if (c == 'king') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);

            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bks(a, n);
            for (i = 0; i < bp.length; i++) {
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                }
            }
            token.push(l[1]);
            token.push(l);
        }
    }
}
function rem(ele, pec) {
    if (pec == 'b') {
        bl = bl.filter(e => e !== ele);
    }
    else if (pec == 'w') {
        wh = wh.filter(e => e !== ele);
    }
}
function bxevents(idx, ls, eve) {
    // //console.log("cwl", token, pec, idx, ls[1], bk1, ls[1] == bk2);
    if ((pec.includes('b'))) {
        // restriction(kcpb);
        // restriction(kcpw);
        if ((pec.includes('b') && (bl.includes(idx)) || bp.includes(idx))) {
            tog(idx);
            a = idx[0];
            n = parseInt(idx[1]);
            if (!token.includes(idx)) {
                //console.log("cl1", token, pec);
                //console.log("clg");
                token = [];
                pec = [];
                if (bl.length > bpc) {
                    bl.pop();
                }
                if (wh.length > wpc) {
                    wh.pop();
                }
                d = [];
            }
            if (token.includes(idx)) {
                
                //check removel
                //console.log("heredfddfdfdfdffdf",checkpathl.includes(idx));
                
                
                //console.log("cl1", token, pec);
                // //console.log(pec[0]);
                // //console.log(ls[0]);
                if (ls.length != 0) {  //this condtion checks that box which is referenced, is empty box or that has any value? ->if false then by pass this code
                    if (pec[0] != ls[0]) { //this condtion checks that box has different piece or not? ->if yes then true
                        jd = ls[ls.length - 1]; //this command extract that after referenced box has which piece
                        str = `${jd.outerHTML}`; //this command is used to convert that extracted variable name into string for further process like intialize, deletion
                        if (pec == 'b') {  // if black piece is eleminate white then remove that from other list and push in other list
                            rem(idx, 'w');
                            wpc--;
                            whc.push(ls[1]);
                            strl = strl + str;
                            whcb.innerHTML = strl;

                        }
                        if (pec == 'w') {  // if white piece is eleminate white then remove that from other list and push in other list
                            rem(idx, 'b');
                            bpc--;
                            blc.push(ls[1]);
                            strl1 = strl1 + str;
                            blcb.innerHTML = strl1;
                        }
                        ls[1].remove();
                        ls.length = 0;

                    }
                }
                eve.append(token[token.length - 2]);
                ls.push(token[token.length - 1][0]);
                //console.log(token[token.length - 1][0], 'nk');
                ls.push(token[token.length - 2]);
                //console.log(token[token.length - 2], 'mk');
                //console.log(ls);
                token[token.length - 1].length = 0;
                token = [];
                //console.log("here bl", pec, ls[1] == bk || ls[1] == wk);

                a=idx[0];
                n=parseInt(idx[1]);
                if (pec.includes('b')) {
                    if (ls[1] == bk) {
                        checkb(a, n, pec);
                        //console.log("change??", a, n, pec,idx);
                    }
                }
                if(flag){
                    if(checkpathl.some(value => bl.includes(value))){
                        flag=false;
                        token1=[];
                        checkremoverd(kcpb,checker);
                    }
                    console.log(temp1,kcpb,kcpw,"hjerr");
                    if(temp1!=kcpb){
                        flag=false;
                        token1=[];
                        checkremoverd(temp1,checker);
                    }
                }


                if (pec.includes('b')) {
                    rem(bl[bl.length - 1], 'b');
                    bl.push(idx);
                    //check for check!!!
                    //console.log("yeqs");
                    // //console.log(!wkc.some(element => wh.includes(element)),"condition");
                    // //console.log(wkc.includes(idx),"condition1");
                    //console.log(idx, "hrt", ls);
                    if (wkc.includes(idx)) {
                        // //console.log(ls[1]==br1 || ls[1]==br2,"condition");
                        //console.log(idx, "hrt", ls[1] == bk1, ls[1] == bk2);
                        if (ls[1] == bq) {
                            bqs(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (ls[1] == bb1 || ls[1] == bb2) {
                            bbs(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (ls[1] == br1 || ls[1] == br2) {
                            brs(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (ls[1] == bk) {
                            bks(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (ls[1] == bk1 || ls[1] == bk2) {
                            bkns(a = idx[0], n = parseInt(idx[1]));
                            //console.log("feef", bp);
                        }
                        else if (kcpw[0].charCodeAt() > 100) {
                            bpis(a = idx[0], n = parseInt(idx[1]));
                        }
                        else {
                            bpss(a = idx[0], n = parseInt(idx[1]));
                        }
                        if (bp.includes(kcpw)) {
                            //console.log("check!!!",bp);
                            //now specify check path!!!!!!!!!!!!!!!!!
                            if (ls[1] == bk1 || ls[1] == bk2) {
                                checkpathl.push(idx);
                            }
                            else {
                                checkpath(idx, kcpw);
                            }
                            checkhandler(idx,kcpw);

                        }
                        //console.log(ls, "lkist", idx, bp, c);
                        bp = [];

                    }

                }
                else if (pec.includes('w')) {
                    rem(wh[wh.length - 1], 'w');
                    wh.push(idx);
                }
                changer();
                console.log("bbb");
                restriction(kcpb);
                console.log("www1");
                restriction(kcpw);
                console.log("www2");

            }
            else if (ls.includes(bp1) ||
                ls.includes(bp2) ||
                ls.includes(bp3) ||
                ls.includes(bp4) ||
                ls.includes(bp5) ||
                ls.includes(bp6) ||
                ls.includes(bp7) ||
                ls.includes(bp8)) {
                handler(a, n, ls, c = 'bp');
            }
            else if (ls.includes(wp1) ||
                ls.includes(wp2) ||
                ls.includes(wp3) ||
                ls.includes(wp4) ||
                ls.includes(wp5) ||
                ls.includes(wp6) ||
                ls.includes(wp7) ||
                ls.includes(wp8)) {
                handler(a, n, ls, c = 'wp');
            }
            else if (ls.includes(bk1) || ls.includes(bk2) || ls.includes(wk1) || ls.includes(wk2)) {
                handler(a, n, ls, c = 'knight');
            }
            else if (ls.includes(br1) || ls.includes(br2) || ls.includes(wr1) || ls.includes(wr2)) {
                handler(a, n, ls, c = 'rook');
            }
            else if (ls.includes(bb1) || ls.includes(bb2) || ls.includes(wb1) || ls.includes(wb2)) {
                handler(a, n, ls, c = 'bishop');
            }
            else if (ls.includes(bq) || ls.includes(wq)) {
                handler(a, n, ls, c = 'queen');
            }
            else if (ls.includes(bk) || ls.includes(wk)) {
                handler(a, n, ls, c = 'king');
            }
            else {
                token = [];
            }
        }
    }
    if ((pec.includes('w') && (wh.includes(idx)) || bp.includes(idx))) {
        // restriction(kcpb);
        // restriction(kcpw);
        tog(idx);
        //console.log(pec[0], idx, "kl", token);
        a = idx[0];
        n = parseInt(idx[1]);
        if (!token.includes(idx)) {
            //console.log("clg");
            //console.log(ls[0], "klklkl", idx, token);
            token = [];
            // pec = [];
            if (bl.length > bpc) {
                bl.pop();
            }
            if (wh.length > wpc) {
                wh.pop();
            }
            d = [];

        }
        if (token.includes(idx)) {
            
            //console.log("heredfdfdfdfdfdfdf",checkpathl.includes(idx));
            
            // //console.log();
            if (ls.length != 0) {
                if (pec[0] != ls[0]) { //this condtion checks that box has different piece or not? ->if yes then true
                    jd = ls[ls.length - 1]; //this command extract that after referenced box has which piece
                    str = `${jd.outerHTML}`; //this command is used to convert that extracted variable name into string for further process like intialize, deletion
                    if (pec == 'b') {  // if black piece is eleminate white then remove that from other list and push in other list
                        rem(idx, 'w');
                        wpc--;
                        whc.push(ls[1]);
                        strl = strl + str;
                        whcb.innerHTML = strl;

                    }
                    if (pec == 'w') {  // if white piece is eleminate white then remove that from other list and push in other list
                        rem(idx, 'b');
                        bpc--;
                        blc.push(ls[1]);
                        strl1 = strl1 + str;
                        blcb.innerHTML = strl1;
                    }
                    ls[1].remove();
                    ls.length = 0;

                }
            }
            eve.append(token[token.length - 2]);
            ls.push(token[token.length - 1][0]);
            //console.log(token[token.length - 1][0], 'nk');
            ls.push(token[token.length - 2]);
            //console.log(token[token.length - 2], 'mk');
            //console.log(ls);
            token[token.length - 1].length = 0;
            token = [];
            //console.log("here cf", pec);

            a=idx[0];
            n=parseInt(idx[1]);
            if (pec.includes('w')) {
                if (ls[1] == wk) {
                    checkb(a, n, pec);
                    //console.log("change??", a, n, pec);
                }
            }
            if(flag){
                //console.log("cjcjcj");
                if(checkpathl.includes(idx)){
                    flag=false;
                    token1=[];
                    checkremoverd(kcpw,checker);
                }
                console.log(temp1,kcpw,"hjerr");
                if(temp1!=kcpw){
                    flag=false;
                    token1=[];
                    checkremoverd(temp1,checker);
                }
            }

            if (pec.includes('b')) {
                rem(bl[bl.length - 1], 'b');
                bl.push(idx);
                //console.log("hesj");

                //check for check!!!
            }
            else if (pec.includes('w')) {
                //console.log(idx, "jkjk");
                rem(wh[wh.length - 1], 'w');

                wh.push(idx);
                //console.log("yeqs");
                // //console.log(!wkc.some(element => wh.includes(element)),"condition");
                // //console.log(wkc.includes(idx),"condition1");
                if (bkc.includes(idx)) {
                    // //console.log(ls[1]==br1 || ls[1]==br2,"condition");
                    if (ls[1] == wq) {
                        bqs(a = idx[0], n = parseInt(idx[1]));
                    }
                    else if (ls[1] == wb1 || ls[1] == wb2) {
                        bbs(a = idx[0], n = parseInt(idx[1]));
                    }
                    else if (ls[1] == wr1 || ls[1] == wr2) {
                        brs(a = idx[0], n = parseInt(idx[1]));

                    }
                    else if (ls[1] == wk) {
                        bks(a = idx[0], n = parseInt(idx[1]));
                    }
                    else if (ls[1] == wk1 || ls[1] == wk2) {
                        bkns(a = idx[0], n = parseInt(idx[1]));
                        //console.log("feef", bp);
                    }
                    else if (kcpb[0].charCodeAt() > 100) {
                        wpis(a = idx[0], n = parseInt(idx[1]));
                    }
                    else {
                        wpss(a = idx[0], n = parseInt(idx[1]));
                    }

                    if (bp.includes(kcpb)) {
                        //console.log("check!!!");
                        //now specify check path!!!!!!!!!!!!!!!!!!!!!!!!
                        if (ls[1] == wk1 || ls[1] == wk2) {
                            checkpathl.push(idx);
                        }
                        else {
                            checkpath(idx, kcpb);
                        }
                        checkhandler(idx,kcpb);

                    }
                    //console.log(ls, "lkist", idx, bp, kcpb);
                    bp = [];
                }
            }
            changer();
            console.log("bbb");
            restriction(kcpb);
            console.log("www1");
            restriction(kcpw);
            console.log("www2");
        }
        else if (ls.includes(bp1) ||
            ls.includes(bp2) ||
            ls.includes(bp3) ||
            ls.includes(bp4) ||
            ls.includes(bp5) ||
            ls.includes(bp6) ||
            ls.includes(bp7) ||
            ls.includes(bp8)) {
            if(!flag){
                handler(a, n, ls, c = 'bp');
            }
            else if(flag==true && checkremover(a,n)){
                handler(a, n, ls, c = 'bp');
            }
            
        }
        else if (ls.includes(wp1) ||
            ls.includes(wp2) ||
            ls.includes(wp3) ||
            ls.includes(wp4) ||
            ls.includes(wp5) ||
            ls.includes(wp6) ||
            ls.includes(wp7) ||
            ls.includes(wp8)) {
                if(!flag){
                    handler(a, n, ls, c = 'wp');
                }
                else if(flag==true && checkremover(a,n)){
                    handler(a, n, ls, c = 'wp');
                }
            
        }
        else if (ls.includes(bk1) || ls.includes(bk2) || ls.includes(wk1) || ls.includes(wk2)) {
            if(!flag){
                handler(a, n, ls, c = 'knight');
            }
            else if(flag==true && checkremover(a,n)){
                handler(a, n, ls, c = 'knight');
            }
        }
        else if (ls.includes(br1) || ls.includes(br2) || ls.includes(wr1) || ls.includes(wr2)) {
            if(!flag){
                handler(a, n, ls, c = 'rook');
            }
            else if(flag==true && checkremover(a,n)){
                handler(a, n, ls, c = 'rook');
            }
        }
        else if (ls.includes(bb1) || ls.includes(bb2) || ls.includes(wb1) || ls.includes(wb2)) {
            if(!flag){
                handler(a, n, ls, c = 'bishop');
            }
            else if(flag==true && checkremover(a,n)){
                handler(a, n, ls, c = 'bishop');
            }
        }
        else if (ls.includes(bq) || ls.includes(wq)) {
            if(!flag){
                handler(a, n, ls, c = 'queen');
            }
            else if(flag==true && checkremover(a,n)){
                handler(a, n, ls, c = 'queen');
            }
        }
        else if (ls.includes(bk) || ls.includes(wk)) {
            console.log("hereee 3");
            if(!flag){
                handler(a, n, ls, c = 'king');
            }
            else if(flag==true && checkremover(a,n)){
                console.log("hrere 5");
                handler(a, n, ls, c = 'king');
            }
        }
        else {
            token = [];
        }
    }

}

a1e.onclick = () => { bxevents(a1, a1l, a1e) };
a2e.onclick = () => { bxevents(a2, a2l, a2e) };
a3e.onclick = () => { bxevents(a3, a3l, a3e) };
a4e.onclick = () => { bxevents(a4, a4l, a4e) };
a5e.onclick = () => { bxevents(a5, a5l, a5e) };
a6e.onclick = () => { bxevents(a6, a6l, a6e) };
a7e.onclick = () => { bxevents(a7, a7l, a7e) };
a8e.onclick = () => { bxevents(a8, a8l, a8e) };

b1e.onclick = () => { bxevents(b1, b1l, b1e) };
b2e.onclick = () => { bxevents(b2, b2l, b2e) };
b3e.onclick = () => { bxevents(b3, b3l, b3e) };
b4e.onclick = () => { bxevents(b4, b4l, b4e) };
b5e.onclick = () => { bxevents(b5, b5l, b5e) };
b6e.onclick = () => { bxevents(b6, b6l, b6e) };
b7e.onclick = () => { bxevents(b7, b7l, b7e) };
b8e.onclick = () => { bxevents(b8, b8l, b8e) };

c1e.onclick = () => { bxevents(c1, c1l, c1e) };
c2e.onclick = () => { bxevents(c2, c2l, c2e) };
c3e.onclick = () => { bxevents(c3, c3l, c3e) };
c4e.onclick = () => { bxevents(c4, c4l, c4e) };
c5e.onclick = () => { bxevents(c5, c5l, c5e) };
c6e.onclick = () => { bxevents(c6, c6l, c6e) };
c7e.onclick = () => { bxevents(c7, c7l, c7e) };
c8e.onclick = () => { bxevents(c8, c8l, c8e) };

d1e.onclick = () => { bxevents(d1, d1l, d1e) };
d2e.onclick = () => { bxevents(d2, d2l, d2e) };
d3e.onclick = () => { bxevents(d3, d3l, d3e) };
d4e.onclick = () => { bxevents(d4, d4l, d4e) };
d5e.onclick = () => { bxevents(d5, d5l, d5e) };
d6e.onclick = () => { bxevents(d6, d6l, d6e) };
d7e.onclick = () => { bxevents(d7, d7l, d7e) };
d8e.onclick = () => { bxevents(d8, d8l, d8e) };

e1e.onclick = () => { bxevents(e1, e1l, e1e) };
e2e.onclick = () => { bxevents(e2, e2l, e2e) };
e3e.onclick = () => { bxevents(e3, e3l, e3e) };
e4e.onclick = () => { bxevents(e4, e4l, e4e) };
e5e.onclick = () => { bxevents(e5, e5l, e5e) };
e6e.onclick = () => { bxevents(e6, e6l, e6e) };
e7e.onclick = () => { bxevents(e7, e7l, e7e) };
e8e.onclick = () => { bxevents(e8, e8l, e8e) };

f1e.onclick = () => { bxevents(f1, f1l, f1e) };
f2e.onclick = () => { bxevents(f2, f2l, f2e) };
f3e.onclick = () => { bxevents(f3, f3l, f3e) };
f4e.onclick = () => { bxevents(f4, f4l, f4e) };
f5e.onclick = () => { bxevents(f5, f5l, f5e) };
f6e.onclick = () => { bxevents(f6, f6l, f6e) };
f7e.onclick = () => { bxevents(f7, f7l, f7e) };
f8e.onclick = () => { bxevents(f8, f8l, f8e) };

g1e.onclick = () => { bxevents(g1, g1l, g1e) };
g2e.onclick = () => { bxevents(g2, g2l, g2e) };
g3e.onclick = () => { bxevents(g3, g3l, g3e) };
g4e.onclick = () => { bxevents(g4, g4l, g4e) };
g5e.onclick = () => { bxevents(g5, g5l, g5e) };
g6e.onclick = () => { bxevents(g6, g6l, g6e) };
g7e.onclick = () => { bxevents(g7, g7l, g7e) };
g8e.onclick = () => { bxevents(g8, g8l, g8e) };

h1e.onclick = () => { bxevents(h1, h1l, h1e) };
h2e.onclick = () => { bxevents(h2, h2l, h2e) };
h3e.onclick = () => { bxevents(h3, h3l, h3e) };
h4e.onclick = () => { bxevents(h4, h4l, h4e) };
h5e.onclick = () => { bxevents(h5, h5l, h5e) };
h6e.onclick = () => { bxevents(h6, h6l, h6e) };
h7e.onclick = () => { bxevents(h7, h7l, h7e) };
h8e.onclick = () => { bxevents(h8, h8l, h8e) };
