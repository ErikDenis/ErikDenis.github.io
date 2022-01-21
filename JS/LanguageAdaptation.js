let Russian = ["RU","AM","BY","MD","OS","KG","KZ","UA","AB","RO","TJ","UZ","IL","PL"]
function geoip(data){
    let CountyCode = data.country_code;
    if (!Russian.includes(CountyCode)) {
        document.location.href = document.location.protocol + "//" + document.location.host + "/en" + document.location.pathname
    }
}