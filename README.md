## Instalación

```
cd bit-generador-csv

npm install

node index.js
```

## MongoDB

[MongoExport](https://docs.mongodb.com/manual/reference/program/mongoexport/)

`mongoexport -d [nombre_base_de_datos] -c [nombre_coleccion] --type 'csv' -f "lista,de,campos" -o [ruta_de_la_salida]`

[MongoImport](https://docs.mongodb.com/manual/reference/program/mongoimport/)

`mongoimport -d [nombre_base_de_datos] -c [nombre_coleccion] --type 'csv' --headline [ruta_del_archivo_a_importar]`
