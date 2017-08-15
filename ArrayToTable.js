function ArrayToTable() { // ArrayToTable class definiton
    var self = this;
    
    this.replaceRules = {};
    this.tableclasses = '';
    this.tableid = '';
    
} // ArrayToTable class definition END
    
ArrayToTable.prototype.putTableHtmlToId = function(dataArray, id) {
    var tableDiv = document.getElementById(id);
    tableDiv.innerHTML = '';
    tableDiv.innerHTML = this.getHtmlForArray(dataArray);
};

ArrayToTable.prototype.getHtmlForArray = function(dataArray) {
    if (Object.keys(dataArray).length === 0) {
        return '';
    }

    var newhtml = '<table';
    if (this.tableclasses !== '') {
        newhtml += ' class="' + this.tableclasses + '"';
    }
    if (this.tableid !== '') {
        newhtml += ' id="' + this.tableid + '"';
    }
    newhtml += '>';



    newhtml += '<thead><tr>';
    var footer = '<tfoot><tr>';
    Object.keys(dataArray[0]).forEach(function(col) {                   
        if (typeof(self.replaceRules) === 'undefined' || typeof(self.replaceRules[col]) === 'undefined') {
            newhtml += '<th class="col_' + col.trim().replace(/\s+/g, '') + '">' + col + '</th>';
            footer += '<th class="col_' + col.trim().replace(/\s+/g, '') + '">' + col + '</th>';
        } else {
            newhtml += '<th class="col_' + col.trim().replace(/\s+/g, '') + '">' + self.replaceRules[col] + '</th>';
            footer += '<th class="col_' + col.trim().replace(/\s+/g, '') + '">' + self.replaceRules[col] + '</th>';                
        }
    });
    newhtml += '</tr></thead>';
    footer += '</tr></tfoot>';



    Object.keys(dataArray).forEach(function(row) {
        newhtml += '<tr>';

        Object.keys(dataArray[row]).forEach(function(col) {
            newhtml += '<td class="col_' + col.trim().replace(/\s+/g, '') + '">';
            newhtml += dataArray[row][col];
            newhtml += '</td>';
        });        

        newhtml += '</tr>';
    });

    newhtml += footer;

    newhtml += '</table>';

    return newhtml;
};
    
// end define once prototypes of class ArrayToTable

