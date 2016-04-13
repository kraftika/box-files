var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var url = 'https://app.box.com/api/oauth2/authorize?response_type=code&client_id=gegee4jf81bjanlsevvivomgb2m96fcu&state=security_token3DKnhMJatFipTAnM0nHlZSS';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  // xhr.send();

  if (xhr != null)
  {
    xhr.followsRedirect=false;
    xhr.withCredentials=true;

    xhr.onreadystatechange  = function() {
      if(xhr.readyState==4)
      {
            if(xhr.status == 200)
            {
                  console.log(xhr.responseText);
            }
            else
            {
                  console.log('error');
            }
      }
    }
    xhr.send();
  }
}

makeCorsRequest();
