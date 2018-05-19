function loadXml() {
var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		if (this.status == 200) {
			getXml(this);
			
		}
	}
	xhr.open("GET","bcards.xml");
	xhr.send();
}
function getXml(xhr) {
			xmlStr = xhr.responseText;
			divRes = document.getElementById('result');
			divRes.innerHTML = xmlStr;
			var xmldata = divRes.getElementsByTagName('bcards')[0];
			bizCard = xmldata.getElementsByTagName('bcard')[0];
			var name = bizCard.getElementsByTagName('Name')[0].firstChild.data;
			var phone1Label = "<b>" + bizCard.getElementsByTagName('phone')[0].getAttribute('type') +": </b>";
			var phone1 = phone1Label + bizCard.getElementsByTagName('phone')[0].firstChild.data;
			var phone1Labe2 = "<b>" + bizCard.getElementsByTagName('phone')[1].getAttribute('type') +": </b>";
			var phone2 = phone1Labe2 + bizCard.getElementsByTagName('phone')[1].firstChild.data;
			var email = "<b>Email: </b>" + bizCard.getElementsByTagName('email')[0].firstChild.data;
			divRes.innerHTML = name + "<br>" + phone1 + "<br>" + phone2 + "<br>" + email;
		}
