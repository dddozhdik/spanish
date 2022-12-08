// Params
var PARAMS = {
  promoTypeLand: "land",
  promoTypePreland: "preland",
  apiLeadSend: "https://clickgo.pro/l/create",
  apiLandingUrl: "https://clickgo.pro/r/url",
  apiUpdateRedirect: "https://clickgo.pro/r/update",
  apiCreateRedirect: "https://clickgo.pro/r/remote",
  // get params todo
  redirectId: "r_id",
  landingUuid: "landing_uuid",
  yandexId: "ya_id",
  referer: "referer",
  subaccount: "subaccount",
  utmCampaign: "utm_campaign",
  utmContent: "utm_content",
  utmMedium: "utm_medium",
  utmSource: "utm_source",
  utmTerm: "utm_term",
  subId1: "sub_id1",
  subId2: "sub_id2",
  subId3: "sub_id3",
  mailTrackerId: "mail_id",
  ttId: "tt_id",
  yandexTrackerId: "yandex_id",
  googleTrackerId: "google_id",
  fbTrackerId: "fb_id",
  showcase: "showcase",
  flowId: "flow_id",
  sys_sub_id1: "sys_sub_id1",
  sys_sub_id2: "sys_sub_id2",
  sys_sub_id3: "sys_sub_id3",
  sys_sub_id4: "sys_sub_id4",
  sys_sub_id5: "sys_sub_id5",
  vkId: "vk_id",
  bigoTrackerId: "ba_id",
  land: "land"
};

const countersL = {
  mail_id: findParam(PARAMS.mailTrackerId),
  yandex_id: findParam(PARAMS.yandexTrackerId),
  google_id: findParam(PARAMS.googleTrackerId),
  fb_id: findParam(PARAMS.fbTrackerId),
  showcase: findParam(PARAMS.showcase),
  flow_id: findParam(PARAMS.flowId),
  tt_id: findParam(PARAMS.ttId),
  vk_id: findParam(PARAMS.vkId),
  ba_id: findParam(PARAMS.bigoTrackerId),
};

const isConfirm = /confirm.html/.test(location.href);

document.addEventListener("DOMContentLoaded", () => {
  try {
    installAShowCaseCPA();
  } catch (e) {
    console.error(e);
  }
});

function installAShowCaseCPA() {
  if (countersL.flow_id && countersL.showcase) {
    const bestViewerLink = document.createElement("script");
    bestViewerLink.setAttribute("src", "https://afcnt.com/js/back.js");

    bestViewerLink.onload = function () {
      const link = `https://best-viewer.ru/new?utm_campaign=4951&utm_source=affstar&utm_medium=2159&sid6=${countersL.flow_id}`;

      if (/chrome/.test(navigator.userAgent.toLowerCase()) && window.vitBack)
        window.vitBack(link, true);
    };

    document.body.appendChild(bestViewerLink);
  }
}

// Функция поиска значения параметра по ключу
function findParam(param) {
  const paramsList = parseQueryString(window.location.search);
  let paramValue;
  for (let key in paramsList) {
    if (key === param) {
      paramValue = paramsList[key];
      break;
    }
  }
  return paramValue;
}

function counters() {
  const cMailRu = function (mailruId) {
      (function (d, id) {
        var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({ id: id, type: "pageView", start: new Date().getTime() });
        (function (d, w, id) {
          if (d.getElementById(id)) return;
          var ts = d.createElement("script");
          ts.type = "text/javascript";
          ts.async = true;
          ts.id = id;
          ts.src =
            (d.location.protocol == "https:" ? "https:" : "http:") +
            "//top-fwz1.mail.ru/js/code.js";
          var f = function () {
            var s = d.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(ts, s);
          };
          if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
          } else {
            f();
          }
        })(document, window, "topmailru-code");
        var r = d.createElement("img"),
          v = d.createElement("div"),
          n = d.createElement("noscript");
        r.src = "//top-fwz1.mail.ru/counter?id=" + id + ";js=na";
        r.style = "border:0;";
        r.height = 1;
        r.width = 1;
        v.style = "position:absolute;left:-10000px;";
        v.appendChild(r);
        n.appendChild(v);
        d.body.appendChild(n);
      })(document, mailruId);
    },
    cYandex = function (yandexId) {
      (function (d, w, c, id) {
        (w[c] = w[c] || []).push(function () {
          try {
            w.yacounter[yandexId] = new Ya.Metrika({
              id: id,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            });
          } catch (e) {}
        });
        var n = d.getElementsByTagName("script")[0],
          s = d.createElement("script"),
          f = function () {
            n.parentNode.insertBefore(s, n);
          };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";
        if (w.opera == "[object Opera]") {
          d.addEventListener("DOMContentLoaded", f, false);
        } else {
          f();
        }
      })(document, window, "yandex_metrika_callbacks", yandexId);
    },
    cGoogle = function (googleId) {
      var head = document.head;

      var googleCDNScript = document.createElement("script");
      googleCDNScript.src =
        "https://www.googletagmanager.com/gtag/js?id='" + googleId + "'";

      var googleTagScript = document.createElement("script");
      googleTagScript.append(
        "window.dataLayer = window.dataLayer || []; \n" +
          "   function gtag(){dataLayer.push(arguments);} \n" +
          "   gtag('js', new Date()); \n" +
          "   gtag('config', '" +
          googleId +
          "'); \n"
      );
      head.prepend(googleTagScript);
      head.prepend(googleCDNScript);
    },
    cVk = function (vkId) {
      var head = document.head;

      var vkTagScript = document.createElement("script");
      vkTagScript.append(
        "!function(){var\n" +
          "t=document.createElement('script');t.type='text/javascript',t.async=!0,t.\n" +
          "src='https://vk.com/js/api/openapi.js?161',t.onload=function()\n" +
          "{VK.Retargeting.Init('" +
          vkId +
          "'),VK.Retargeting.Hit()},document.head.appendChild(t)}();\n"
      );
      var vkNoScript = document.createElement("noscript");
      vkNoScript.append(
        "<img src='https://vk.com/rtrg?p=" +
          vkId +
          "' style='position: fixed; left:-999px;' alt=''>"
      );
      head.prepend(vkTagScript);
      head.prepend(vkNoScript);
    },
    cFaceBook = function (facebookId) {
      const trackFB = isConfirm ? "Lead" : "PageView";
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", facebookId);
      fbq("track", trackFB);
    },
    cTTPixel = function (id) {
      !(function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = (w[t] = w[t] || []);
        (ttq.methods = [
          "page",
          "track",
          "identify",
          "instances",
          "debug",
          "on",
          "off",
          "once",
          "ready",
          "alias",
          "group",
          "enableCookie",
          "disableCookie",
        ]),
          (ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          });
        for (var i = 0; i < ttq.methods.length; i++)
          ttq.setAndDefer(ttq, ttq.methods[i]);
        (ttq.instance = function (t) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
            ttq.setAndDefer(e, ttq.methods[n]);
          return e;
        }),
          (ttq.load = function (e, n) {
            var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
            (ttq._i = ttq._i || {}),
              (ttq._i[e] = []),
              (ttq._i[e]._u = i),
              (ttq._t = ttq._t || {}),
              (ttq._t[e] = +new Date()),
              (ttq._o = ttq._o || {}),
              (ttq._o[e] = n || {});
            var o = document.createElement("script");
            (o.type = "text/javascript"),
              (o.async = !0),
              (o.src = i + "?sdkid=" + e + "&lib=" + t);
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(o, a);
          });

        ttq.load(id);
        ttq.page();
      })(window, document, "ttq");
    },
    cBigoAds = function (id) {
      var head = document.head;

      var bigoAdsScript = document.createElement("script");
      bigoAdsScript.src =
        "https://api.imotech.video/ad/events.js?pixel_id=" + id;

      var bigoAdsTag = document.createElement("script");
      bigoAdsTag.append(
        "window.bgdataLayer = window.bgdataLayer || []; \n" +
          "   function bge(){bgdataLayer.push(arguments);} \n" +
          "   bge('init'," +
          id +
          "); \n" +
          "   bge('event', 'page_view'); \n"
      );

      head.prepend(bigoAdsTag);
      head.prepend(bigoAdsScript);
    };

  if (countersL.mail_id) cMailRu(countersL.mail_id);
  if (countersL.yandex_id) cYandex(countersL.yandex_id);
  if (countersL.google_id) cGoogle(countersL.google_id);
  if (countersL.vk_id) cVk(countersL.vk_id);
  if (countersL.fb_id) cFaceBook(countersL.fb_id);
  if (countersL.tt_id) cTTPixel(countersL.tt_id);
  if (countersL.ba_id) cBigoAds(countersL.ba_id);
}

try {
  counters();
} catch (e) {
  console.error(e);
}

// Functions
function parseQueryString(queryString) {
  var queryParams = {};

  if (!queryString.length) {
    return queryParams;
  }

  if (queryString.substr(0, 1) === "?") {
    queryString = queryString.substr(1);
  }

  var params = queryString.split("&");
  for (var i = 0; i < params.length; i++) {
    var pair = params[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);

    if (key === "undefined" || value === "undefined") {
      continue;
    }

    queryParams[key] = value;
  }

  return queryParams;
}

// object
var afjs = {};
afjs.init = function (promoType, confirmPage, flowUuid, subids) {
  var queryParams = parseQueryString(window.location.search);
  var redirectId = queryParams[PARAMS.redirectId];

  var createRedirect = function (flowUuid, referer) {
    console.log("createRedirect");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", PARAMS.apiCreateRedirect, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("createRedirect xhr === 200");
        var response = JSON.parse(xhr.response);
        if (response.success === true) {
          redirectId = response.data.r_id;
          console.log(response);
        } else {
          console.log("createRedirect success===false");
          console.log(response.errors);
          for (var i = 0; i < response.errors.length; i++) {
            alert(response.errors[i]);
          }
        }
      } else {
        console.log(xhr);
        console.log("createRedirect xhr !== 200");
      }
    };

    var sub_id1 = "";

    if (subids && subids.length) {
      var test = ["{subid}", "{clickid}", "{{vcode}}", "<tid>"];
      for (var index = 0; index < subids.length; index++) {
        var value = subids[index];
        var testValue = test[index];
        if (value !== testValue) {
          sub_id1 = value;
        }
      }
    }

    if (!sub_id1) {
      sub_id1 = queryParams[PARAMS.subId1];
    }

    var data = JSON.stringify({
      flow_uuid: flowUuid,
      referer: referer,
      subaccount: queryParams[PARAMS.subaccount],
      utm_campaign: queryParams[PARAMS.utmCampaign],
      utm_content: queryParams[PARAMS.utmContent],
      utm_medium: queryParams[PARAMS.utmMedium],
      utm_source: queryParams[PARAMS.utmSource],
      utm_term: queryParams[PARAMS.utmTerm],
      sub_id1,
      sub_id2: queryParams[PARAMS.subId2],
      sub_id3: queryParams[PARAMS.subId3],
      sys_sub_id1: queryParams[PARAMS.sys_sub_id1],
      sys_sub_id2: queryParams[PARAMS.sys_sub_id2],
      sys_sub_id3: queryParams[PARAMS.sys_sub_id3],
      sys_sub_id4: queryParams[PARAMS.sys_sub_id4],
      sys_sub_id5: queryParams[PARAMS.sys_sub_id5],
    });

    console.log(queryParams, data);
    xhr.send(data);

    return redirectId;
  };

  // Отправка лида
  var sendLead = function (redirectId, name, phone, country, comment, address) {
    console.log("sendLead");

    var result = false;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", PARAMS.apiLeadSend, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("sendLead xhr === 200");
        var response = JSON.parse(xhr.response);
        if (response.success === true) {
          result = true;
        } else {
          console.log("sendLead success===false");
          console.log(response.errors);
          for (var i = 0; i < response.errors.length; i++) {
            var error = response.errors[i],
              errorParts = [];

            if (error.field) {
              errorParts.push(error.field);
            }
            errorParts.push(error.text);

            alert(errorParts.join(": "));
          }
        }
      } else {
        console.log(xhr);
        console.log("sendLead xhr !== 200");
      }
    };
    var data = JSON.stringify({
      r_id: redirectId,
      name: name,
      phone: phone,
      country_code: country,
      comment: comment,
      address: address,
    });
    xhr.send(data);

    return result;
  };

  // Получение ссылки с преленда на ленд
  var getLandingUrl = function (redirectId) {
    console.log("getLandingUrl");

    var xhr = new XMLHttpRequest();
    var landingUrl = "";
    var requestParam = {
      r_id: redirectId,
      mail_id: countersL.mail_id,
      yandex_id: countersL.yandex_id,
      google_id: countersL.google_id,
      vk_id: countersL.vk_id,
      ba_id: countersL.ba_id,
      fb_id: countersL.fb_id,
      tt_id: countersL.tt_id,
      land: queryParams[PARAMS.land]
    };

    var query = Object.keys(requestParam)
      .map(function (key) {
        if (requestParam[key] !== null && requestParam[key] !== undefined) {
          return key + "=" + requestParam[key];
        }
      })
      .filter(function (value) {
        return !!value;
      })
      .join("&");

    xhr.open("GET", PARAMS.apiLandingUrl + "?" + query, false);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("landingUrl xhr === 200");
        var response = JSON.parse(xhr.response);
        if (response.success === true) {
          landingUrl = response.data.url;
        } else {
          console.log("landingUrl success===false");
        }
      } else {
        console.log(xhr.response);
        console.log("landingUrl xhr !== 200");
      }
    };

    xhr.send();

    return landingUrl;
  };

  // Замена всех ссылок
  var replaceAllLinkToLandingUrl = function (url) {
    console.log("replaceAllLinkToLandingUrl");

    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].href = url;
    }
  };

  // Отправляем запрос о посещении ленда, с указанием его UUID
  var updateRedirect = function (redirectId, landingUuid) {
    console.log("updateRedirect");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", PARAMS.apiUpdateRedirect, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.response);
        console.log("updateRedirect xhr 200");
      } else {
        console.log("updateRedirect xhr is not 200");
      }
    };
    var data = JSON.stringify({
      r_id: redirectId,
      landing_uuid: landingUuid,
    });

    xhr.send(data);
  };

  // Обработчик ивента отправки формы
  var submitFormHandler = function (event) {
    event.preventDefault();

    var name = "";
    var phone = "";
    var country = "";
    var comment = "";
    var address = "";

    var inputs = event.target.getElementsByTagName("input");
    for (var ii = 0; ii < inputs.length; ii++) {
      if (inputs[ii].name === "name") {
        name = inputs[ii].value;
      }
      if (inputs[ii].name === "phone") {
        phone = inputs[ii].value;
      }
      if (inputs[ii].name === "country") {
        country = inputs[ii].value;
      }
      if (inputs[ii].name === "comment") {
        comment = inputs[ii].value;
      }
      if (inputs[ii].name === "address") {
        address = inputs[ii].value;
      }
    }

    var selects = event.target.getElementsByTagName("select");
    for (ii = 0; ii < selects.length; ii++) {
      if (selects[ii].name === "country") {
        country = selects[ii].value;
      }
    }

    var result = sendLead(redirectId, name, phone, country, comment);
    if (result && confirmPage) {
      var confirmUrl = confirmPage;

      let path =
        confirmUrl +
        "?name=" +
        name +
        "&phone=" +
        phone +
        "&country_code=" +
        country;

      for (let key in countersL) {
        if (countersL[key]) path += `&${key}=${countersL[key]}`;
      }

      var link = document.createElement("a");
      link.href = path;

      link.click();
    }
  };

  //
  // Основной скрипт
  //

  // Вешаем обработчик на весь документ, иначе не сможем отслеживать динамические формы (например, попап)
  document.addEventListener("submit", function (event) {
    if (event.target && event.target.tagName === "FORM") {
      submitFormHandler(event);
    }
  });

  if (promoType === PARAMS.promoTypePreland) {
    var url = getLandingUrl(redirectId);
    window.LANDING_URL = url;
    replaceAllLinkToLandingUrl(url);
  }
  if (promoType === PARAMS.promoTypeLand) {
    if (!redirectId) {
      if (flowUuid) {
        redirectId = createRedirect(flowUuid, document.referrer);
      }
    }

    if (
      queryParams[PARAMS.landingUuid] &&
      queryParams[PARAMS.landingUuid] !== "undefined"
    ) {
      updateRedirect(redirectId, queryParams[PARAMS.landingUuid]);
    }
  }
};

afjs.confirm = function () {
  var queryParams = parseQueryString(window.location.search);
  var returnEl = document.getElementById("return");

  document.getElementById("name").textContent = queryParams["name"];
  document.getElementById("phone").textContent = queryParams["phone"];

  if (returnEl) returnEl.href = document.referrer;
};
