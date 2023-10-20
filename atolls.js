// Sample data representing atolls and islands. You need to replace this with actual data.
var atollIslands = {
    Haa Alifu: ["Alidhoo","Alidhuffarufinolhu","Baarah","Beenaafushi","Berinmadhoo","Dhapparuhuraa","Dhihdhoo","Dhonakulhi","Filladhoo","Gaamathikulhudhoo","Gallandhoo","Govvaafushi","Hathifushi","Huvahandhoo","Huvarafushi","Ihavandhoo","Innafinolhu","Kan'daalifinolhu","Kelaa","Kudafinolhu","Maafahi","Maafinolhu","Maarandhoo","Maarandhoofarufinolhu","Madulu","Manafaru","Matheerah","Medhafushi","Mulhadhoo","Mulidhoo","Muraidhoo","Naridhoo","Thakandhoo","Thuraakunu","Uligamu","Un'gulifinolhu","Utheemu","Van'gaaru","Vashafaru","Velifinolhu","Gaafushi","Dhigufaruhuraa","Umuraiyfinolhu"],
    atoll2: ["Island B1", "Island B2", "Island B3"],
    // ... other atolls
};

function populateIslands() {
    var atollSelect = document.getElementById("atoll");
    var islandSelect = document.getElementById("island");
    var selectedAtoll = atollSelect.value;

    // Clear previous options
    islandSelect.innerHTML = "";

    // Get the relevant islands
    var islands = atollIslands[selectedAtoll];
    if (islands) {
        islands.forEach(function(island) {
            var option = document.createElement("option");
            option.value = island;
            option.textContent = island;
            islandSelect.appendChild(option);
        });
    } else {
        // No island or default option
        var option = document.createElement("option");
        option.value = "";
        option.textContent = "Select Island";
        islandSelect.appendChild(option);
    }
}
