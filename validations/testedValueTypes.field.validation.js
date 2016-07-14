function check(field) {
	var checkedValueTypes = [
		"Boolean",
		"String",
		"StringMultiLine",
		"Integer",
		"Date",
		"StringFile",
		"DataRef"
	];

	if (field.findtext('fieldType') === "VALUE_FIELD" && checkedValueTypes.indexOf(field.findall('./valueField/valueFieldType/')[0].attrib.name) === -1) {
		var warning = "Field " + field.attrib.name + "  does not have a tested value type! (" + field.valueField.valueFieldType.attrib.name + ")";
		return warning;
	} else {
		return null;
	}
}

module.exports = {
	check: check
}