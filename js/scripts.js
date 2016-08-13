function Button(text, className) {
	this.text = text || "Default";
	this.className = className || "btn-default";
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button class="btn">');
		this.$element.text(this.text);
		this.$element.addClass(this.className);
		this.$element.css({"display": "inline-block", "margin": "0 4px 0 0"});
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}


var defaultBtn = new Button(),
	primaryBtn = new Button("Primary", "btn-primary"),
	successBtn = new Button("Success", "btn-success"),
	infoBtn = new Button("Info", "btn-info"),
	warningBtn = new Button("Warning", "btn-warning"),
	dangerBtn = new Button("Danger", "btn-danger");

defaultBtn.create();
primaryBtn.create();
successBtn.create();
infoBtn.create();
warningBtn.create();
dangerBtn.create();