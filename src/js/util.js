const M = Math,
      log = M.log,
      floor = M.floor,
      min = M.min,
      pow = M.pow

String.prototype.splice = function(index, delnum, replaceContext="") {
	let result  = "",
		len     = this.length,
		start,
		end

	if(delnum < 0) {
		delnum = 0;
	}

	if(index < 0) {
		index = -1;
	}

	start = (index + 1 > len) ? 
	this.substring(0, len + 1) :
	this.substring(0, index + 1);
	
	end = (index + 1 + delnum > len) ?
	"" :
	this.substring(index + 1 + delnum, len + 1 );

	result = start + replaceContext + end;

	return result;
}

export const $ = ( v,d ) =>  {
	d = d || document;
	return d.querySelector(v);
}

export const $$ = ( v,d ) => {
	d = d || document;
	return d.querySelectorAll(v);
}

export const getCookie = (name) => {
	let arr   = document.cookie.split("; "),
		i     = 0,
		key   = "",
		value = "";

		for (i = 0; i<arr.length; i++) {
			if (arr[i]) {
				key = arr[i].match(/^(.+)=/)[1]
				value = arr[i].match(/=(.+)$/)[1]
			} else {
				key = ""
				value = "";
			} 
			
			if (key === name) {
				return arr[i].split("=");
			}
		}

		return null;
}

export const setCookie = (name, value, expiredays=1) => {
	let  oDate = new Date();

	oDate.setDate( oDate.getDate() +  expiredays );
	document.cookie = name + "=" + value + ";expires=" + oDate;
}

export const delCookie = (name, value="", expiredays=-1) => {
	setCookie(name, value, expiredays);
}

export const NumChangeToCN = (n) => {
	let CN = ["零","一","二","三","四","五","六","七","八","九","十"]

	return CN[n];
}

export const formatDate = (publish_time) => {
	let pt = "",
		DateArr = publish_time.split("|"),
		nowDate = new Date().getTime(),
		di      = nowDate - parseInt(DateArr[1]),
        div     = ~~(di / 31536000000)
        
    switch( true ) {
    	case div === 0:
    		pt = DateArr[0];
    		break;

    	case (div >= 1 && div <= 10):
    		pt = `${NumChangeToCN(div)}年前`;
    		break;

    	default:
    		pt = `很久很久以前`;
    		break;
    }

    return pt;
}

export const getPostion = (ele) => {
    let result = [0,0];
    
    while(ele) {
        result[0] += ele.offsetLeft;
        result[1] += ele.offsetTop;

        ele = ele.offsetParent;
    }

    return result;
}

export const MemoryHumanReadable = (num) => {
    const units = ["B","KB","MB","GB","TB","PB","EB","ZB","YB"],
          exponent = Math.min(floor(log(num)/log(1024)),units.length - 1),
          size = Number((num / Math.pow(1024, exponent))).toPrecision(3),
          unit = units[exponent]

    return size + unit;
}