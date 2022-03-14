export default function getCookieValueByName(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : "";
}