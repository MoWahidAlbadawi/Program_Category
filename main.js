let input=document.querySelector(".form .number");
let ok=document.querySelector(".form .ok");
let table=document.querySelector(".table");
let nameCtaegory=document.querySelector(".nameC");
let works=document.querySelectorAll(".work");
let allIcon = document.querySelector('.icon-hillal');
let iconHillal = document.querySelector(".icon");
let onRamadan = document.querySelector('.on-ramadan');
let offRamadan = document.querySelector('.off-ramadan');
let times =document.querySelectorAll('.time');
let ramadanAudio = document.querySelector(".ramadan-audio");
let valueInput;
input.oninput=function() {
    valueInput=input.value;
};
ok.onclick=function() {
    Empty();
    fillingUp();
    table.style.opacity='1';
    input.value="";
};
//press enter to proccing
// document.onkeyup=function(e) {
//     if(e.key==="Enter")
//     {
//     Empty();
//     nameCtaegory.innerHTML=`Category #${valueInput}`;
//     fillingUp();
//     table.style.opacity='1';
//     input.value="";
// }
// };
window.onload=function() {
    input.focus();
};
iconHillal.onclick=function () {
    if(offRamadan.classList.contains('off')) {
    onTimeRamadan();
    onRamadan.classList.add('off');
    offRamadan.classList.remove('off');
    offRamadan.classList.add('on');
        allIcon.classList.add('done');
        ramadanAudio.play();
    }
    else {
        offTimeRamadan();
        allIcon.classList.remove('done');
        offRamadan.classList.add('off');
        onRamadan.classList.remove('off');
        onRamadan.classList.add('on');
    }
}
function fillingUp() {
    if(valueInput==1 || valueInput=='١')
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[14].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[14].classList.add('active');
        works[18].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[18].classList.add('active');
        works[3].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[3].classList.add('active');
        works[7].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[7].classList.add('active');
        works[8].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[8].classList.add('active');
        works[24].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[24].classList.add('active');
        works[19].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[19].classList.add('active');
    }
    else if (valueInput==2 || valueInput=='٢') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[14].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[14].classList.add('active');
        works[18].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[18].classList.add('active');
        works[3].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[3].classList.add('active');
        works[7].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[7].classList.add('active');
        works[8].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[8].classList.add('active');
        works[24].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[24].classList.add('active');
        works[19].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[19].classList.add('active');
    }
    else if(valueInput==3 || valueInput=='٣') { 
        nameCtaegory.innerHTML=`Category #${valueInput}`;  
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[23].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[23].classList.add('active');
        works[19].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[19].classList.add('active');
        works[5].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[5].classList.add('active');
        works[18].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[18].classList.add('active');
        works[0].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[0].classList.add('active');
        works[15].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[15].classList.add('active');
        works[24].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[24].classList.add('active');
    }
    else if (valueInput==4 || valueInput=='٤') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[23].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[23].classList.add('active');
        works[19].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[19].classList.add('active');
        works[5].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[5].classList.add('active');
        works[18].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[18].classList.add('active');
        works[0].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[0].classList.add('active');
        works[15].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[15].classList.add('active');
        works[24].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[24].classList.add('active');
    }
    else if(valueInput==5 || valueInput=='٥')
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[24].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[24].classList.add('active');
        works[8].innerHTML=`<span>مبادئ الذكاء</span><br>ق1`;
        works[8].classList.add('active');
        works[19].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[19].classList.add('active');
        works[13].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[13].classList.add('active');
        works[18].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[18].classList.add('active');
        works[15].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[15].classList.add('active');
        works[10].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[10].classList.add('active');
    }
    else if (valueInput==6 || valueInput=='٦') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[24].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[24].classList.add('active');
        works[8].innerHTML=`<span>مبادئ الذكاء</span><br>ق1`;
        works[8].classList.add('active');
        works[19].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[19].classList.add('active');
        works[13].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[13].classList.add('active');
        works[18].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[18].classList.add('active');
        works[15].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[15].classList.add('active');
        works[10].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[10].classList.add('active');
    }
    else if(valueInput==7 || valueInput=='٧') 
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[18].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[18].classList.add('active');
        works[14].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[14].classList.add('active');
        works[24].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[24].classList.add('active');
        works[13].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[13].classList.add('active');
        works[10].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[10].classList.add('active');
        works[20].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[20].classList.add('active');
        works[15].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[15].classList.add('active');
    }
    else if (valueInput==8 || valueInput=='٨') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[18].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[18].classList.add('active');
        works[14].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[14].classList.add('active');
        works[24].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[24].classList.add('active');
        works[13].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[13].classList.add('active');
        works[10].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[10].classList.add('active');
        works[20].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[20].classList.add('active');
        works[15].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[15].classList.add('active');
    }
    else if(valueInput==9 || valueInput=='٩')
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[20].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[20].classList.add('active');
        works[18].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[18].classList.add('active');
        works[8].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[8].classList.add('active');
        works[13].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[13].classList.add('active');
        works[15].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[15].classList.add('active');
        works[24].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[24].classList.add('active');
        works[14].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[14].classList.add('active');
    }
    else if (valueInput==10 || valueInput=='١٠') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[20].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[20].classList.add('active');
        works[18].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[18].classList.add('active');
        works[8].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[8].classList.add('active');
        works[13].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[13].classList.add('active');
        works[15].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[15].classList.add('active');
        works[24].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[24].classList.add('active');
        works[14].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[14].classList.add('active');
    }
    else if(valueInput==11 || valueInput=='١١')
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[13].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[13].classList.add('active');
        works[8].innerHTML=`<span>مبادئ الذكاء</span><br>ق1`;
        works[8].classList.add('active');
        works[10].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[10].classList.add('active');
        works[7].innerHTML=`<span>خوارزميات (3)</span><br>ق5ب`;
        works[7].classList.add('active');
        works[3].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[3].classList.add('active');
        works[15].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[15].classList.add('active');
        works[20].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[20].classList.add('active');
    }
    else if (valueInput==12 || valueInput=='١٢') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[13].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[13].classList.add('active');
        works[8].innerHTML=`<span>مبادئ الذكاء</span><br>ق1`;
        works[8].classList.add('active');
        works[10].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[10].classList.add('active');
        works[7].innerHTML=`<span>خوارزميات (3)</span><br>ق5ب`;
        works[7].classList.add('active');
        works[3].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[3].classList.add('active');
        works[15].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[15].classList.add('active');
        works[20].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[20].classList.add('active');
    }
    else if(valueInput==13 || valueInput=='١٣')
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[15].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[15].classList.add('active');
        works[19].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[19].classList.add('active');
        works[14].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[14].classList.add('active');
        works[8].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[8].classList.add('active');
        works[24].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[24].classList.add('active');
        works[20].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[20].classList.add('active');
        works[13].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[13].classList.add('active');
    }
    else if (valueInput==14 || valueInput=='١٤') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[15].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[15].classList.add('active');
        works[19].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[19].classList.add('active');
        works[14].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[14].classList.add('active');
        works[8].innerHTML=`<span>خوارزميات (3)</span><br>ق3`;
        works[8].classList.add('active');
        works[24].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[24].classList.add('active');
        works[20].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[20].classList.add('active');
        works[13].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[13].classList.add('active');
    }
    else if(valueInput==15 || valueInput=='١٥')
    {    
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[19].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[19].classList.add('active');
        works[14].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[14].classList.add('active');
        works[0].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[0].classList.add('active');
        works[18].innerHTML=`<span>خوارزميات (3)</span><br>3ق`;
        works[18].classList.add('active');
        works[5].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[5].classList.add('active');
        works[24].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[24].classList.add('active');
        works[23].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[23].classList.add('active');
    }
    else if (valueInput==16 || valueInput=='١٦') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[19].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[19].classList.add('active');
        works[14].innerHTML=`<span>مبادئ الذكاء</span><br>ق2`;
        works[14].classList.add('active');
        works[0].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[0].classList.add('active');
        works[18].innerHTML=`<span>خوارزميات (3)</span><br>3ق`;
        works[18].classList.add('active');
        works[5].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[5].classList.add('active');
        works[24].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[24].classList.add('active');
        works[23].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[23].classList.add('active');
    }
    else if(valueInput==17 || valueInput=='١٧')
    {   
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[10].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[10].classList.add('active');
        works[7].innerHTML=`<span>مبادئ الذكاء</span><br>ق5أ`;
        works[7].classList.add('active');
        works[15].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[15].classList.add('active');
        works[8].innerHTML=`<span>خوارزميات (3)</span><br>3ق`;
        works[8].classList.add('active');
        works[13].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[13].classList.add('active');
        works[20].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[20].classList.add('active');
        works[18].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[18].classList.add('active');
    }
    else if (valueInput==18 || valueInput=='١٨') {
        nameCtaegory.innerHTML=`Category #${valueInput}`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        //---------------------work--------------------------
        works[10].innerHTML=`<span>هندسة البرمجيات (1)</span><br>مخبر قواعد المعطيات`;
        works[10].classList.add('active');
        works[7].innerHTML=`<span>مبادئ الذكاء</span><br>ق5أ`;
        works[7].classList.add('active');
        works[15].innerHTML=`<span>الاتصالات الرقمية</span><br>مخبر الاتصالات`;
        works[15].classList.add('active');
        works[8].innerHTML=`<span>خوارزميات (3)</span><br>3ق`;
        works[8].classList.add('active');
        works[13].innerHTML=`<span>شبكات حاسوبية</span><br>مخبر الشبكات`;
        works[13].classList.add('active');
        works[20].innerHTML=`<span>لغات صورية</span><br>ق1`;
        works[20].classList.add('active');
        works[18].innerHTML=`<span>بنية وتنظيم حاسب</span><br>مخبر البنية`;
        works[18].classList.add('active');
    }
    else {
        nameCtaegory.innerHTML=`Category not found`;
        works[9].innerHTML=`<span>خوارزميات (3)</span><br>ق4`;
        works[4].innerHTML=`<span>لغات صورية</span><br>ق4`;
        works[17].innerHTML=`<span>بنيان حاسب (1)</span><br>ق6`;
        works[12].innerHTML=`<span>اتصالات تشابهية ورقمية</span><br>ق2`;
        works[2].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        works[16].innerHTML=`<span>مبادئ ذكاء صنعي</span><br>ق4`;
        works[6].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[11].innerHTML=`<span>هندسة البرمجيات (1)</span><br>ق4`;
        works[1].innerHTML=`<span>شبكات حاسوبية</span><br>ق1`;
        // works[2].innerHTML=`<span>خوارزميات(2)</span><br>ق3`;
        // works[2].classList.add('active');
    }
}
function Empty() {
    for(let i=0;i<works.length;i++) {
        works[i].innerHTML="";
        works[i].classList.remove("active");
    }
}
function onTimeRamadan() {
    times[0].innerHTML=`9 - 10:30`;
    times[1].innerHTML=`10:30 - 12`;
    times[2].innerHTML=`12 - 1:30`;
    times[3].innerHTML=`1:30 - 3`;
    times[4].innerHTML=`3 - 4:30`;
}
function offTimeRamadan() {
    times[0].innerHTML=`9 - 10:30`;
    times[1].innerHTML=`10:45 - 12:15`;
    times[2].innerHTML=`12:30 - 2`;
    times[3].innerHTML=`2:15 - 3:45`;
    times[4].innerHTML=`4 - 5:30`;
}