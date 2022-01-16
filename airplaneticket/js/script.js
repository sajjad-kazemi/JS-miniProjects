var $ = document;
var countryList = {
    ایران : ["تهران","شیراز","اصفهان","مشهد","تبریز","بندرعباس","اهواز","ارومیه","کرج"],
    عراق : ["بغداد","کربلا","بصره","اربیل","عمادیه","کوفه","موصل","سلیمانیه"],
    انگلیس : ["لندن","ومبلی","بیرمنگام","گلاسگو","لیورپول","منچستر","لستر"]
};
var firstOption = $.getElementsByClassName("firstOption");
var countryFrom = $.getElementById("countryFrom");
var cityFrom = $.getElementById("cityFrom");
var countryTo = $.getElementById("countryTo");
var cityTo = $.getElementById("cityTo");
var submitBtn = $.getElementById("submit");
function checkCountry(country){
    return countryList[country];
};
function countryChanged(event){
    firstOption[0].setAttribute("disabled",true);
    $.getElementById("choose").innerHTML = "شهر مورد نظرتان را انتخاب کنید"
    var countryValue = event.target.value
    if (countryValue in countryList === false){
        $.getElementById("cityfrom").setAttribute("disabled",true)
        return false;
    };
    var citySelect = $.getElementById("cityFrom");
    var country = checkCountry(countryValue);
    citySelect.removeAttribute("disabled");
    var children = $.getElementsByClassName("citySelect");
    var ii = 0;
    while (ii < children.length){
        citySelect.removeChild(children[ii])
    };
    var i = 0;
    while (i < country.length){
        let ele = $.createElement("option");
        ele.value = country[i];
        ele.innerHTML = country[i];
        ele.classList.add("citySelect")
        cityFrom.appendChild(ele);
        i++;
    }
    $.getElementById("choose").setAttribute("disabled","true");
};

function countryChanged2(event){
    firstOption[1].setAttribute("disabled",true);
    $.getElementById("chooseTo").innerHTML = "شهر مورد نظرتان را انتخاب کنید";
    var countryValue = event.target.value
    if (countryValue in countryList === false){
        $.getElementById("cityTo").setAttribute("disabled",true)
        return false;
    };
    var citySelect = $.getElementById("cityTo");
    var country = checkCountry(countryValue);
    citySelect.removeAttribute("disabled");
    var children = $.getElementsByClassName("citySelectTo");
    var ii = 0;
    while (ii < children.length){
        citySelect.removeChild(children[ii])
    };
    var i = 0;
    while (i < country.length){
        let ele = $.createElement("option");
        ele.value = country[i];
        ele.innerHTML = country[i];
        ele.classList.add("citySelectTo")
        cityTo.appendChild(ele);
        i++;
    }
    $.getElementById("chooseTo").setAttribute("disabled","true");
};
function submitcheck(){
    if (cityTo.value === cityFrom.value){
        submitBtn.disabled = true;
        return false;
    }
    for(var c in countryList){
        for (var t of countryList[c]){
            if (cityTo.value === t){
                var toRule = true;
                continue;
            }
            if (cityFrom.value === t){
                var fromRule = true;
            }
        }
    }
    if (fromRule === true && toRule === true){
        submitBtn.removeAttribute("disabled");
    }
}
function submitForm(event){
    event.preventDefault();
    console.log("you are traveling from",countryFrom.value,"-",cityFrom.value,"to",countryTo.value,"-",cityTo.value )
}
