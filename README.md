# ArrayToTable
Very simple JS class to generate a table from an array of rows, having the same object keys in each row and drawing headers.

Depends on nothing except decent browsers (IE9+), not even jquery is needed.

If requested, will do an npm/bower package, but as there are no dependencies, you literally just need to copy the source file.

Example data structure it works with (from PHP):

```php
<?php
        // IN THIS EXAMPLE: $mysqli is mysqli connection resource, $sql is the query which returns rows 
        $retarray = array();
        $result = $mysqli->query($sql);
        if ($result) {
            while ($record = $result->fetch_assoc())
            {
                $arrayline = array();
                foreach ($record as $key => $value)
                {
                    $arrayline[$key] = $value;
                }
                $retarray[] = $arrayline;
            }
        }
        
        return $retarray;
        
        
        // echo json_encode($retarray) should be the exact response over ajax making the "dataArray" variable in JS
```

```js

    var tableGen = new ArrayToTable();
    
    // optional
    tableGen.tableclasses = 'bluetable table-with-oddeven';
    tableGen.tableid = 'something-unique';
    
    tableGen.replaceRules['created_at'] = 'Registration Time'; // for the header text vs the sql col as header
    // ...

    tableGen.putTableHtmlToId(dataArray, 'div_id_which_will_contain_table');
    
    // you can just simply get the html string by
    // var tableHtmlString = tableGen.getHtmlForArray(dataArray);
    // so you can add it to something else than an ID
```
