# Project Structure
In this project we have 2 folders backend and frontend, both have different systems, the frontend its angular and the backend it is laravel.

# Backend
Its is a laravel project that you will be able to access on:
localhost:4100

## Command to create the host
```
    php artisan serve --host:127.0.0.1 --port=80
```

## Migration model
To be able to communicate it is necessary to have a migration model, that we can create doing:
```
    php artisan make:Model TaskMModel -m
```
This will result in:
```
        app/Models/TaskMModel.php
        database/migrations/2020_10_27_082750_create_task_m_models_table.php
```

### Creation of the table
* access the generated file: **database/migrations/2020_10_27_115950_create_tasks_table.php**
* on the up function change the values to contain the structure, in our case, I've changed to be:
```php
public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('status');
            $table->string('date');
            $table->timestamps();
        });
    }
```
* run the following command to create the table
```
    php artisan migrate
```
Will result the migration table:
```
Migrating: 2020_10_27_115950_create_tasks_table
Migrated:  2020_10_27_115950_create_tasks_table (17.00ms)

MariaDB [backend]> show columns from tasks;
+------------+---------------------+------+-----+---------+----------------+
| Field      | Type                | Null | Key | Default | Extra          |
+------------+---------------------+------+-----+---------+----------------+
| id         | bigint(20) unsigned | NO   | PRI | NULL    | auto_increment |
| title      | varchar(191)        | NO   |     | NULL    |                |
| status     | tinyint(1)          | NO   |     | NULL    |                |
| date       | varchar(191)        | NO   |     | NULL    |                |
| created_at | timestamp           | YES  |     | NULL    |                |
| updated_at | timestamp           | YES  |     | NULL    |                |
+------------+---------------------+------+-----+---------+----------------+
```

## Whenever we add a new route its necessary to add to the VerifyCsfToken as an exception
* backend/app/Http/Middleware/VerifyCsrfToken.php
```
<?php
namespace App\Http\Middleware;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    protected $except = [
        'add'
    ];
}
```
## Controllers creation
This is the command to create a controller for this project, the name will be TaskController
```
php artisan make:Controller TaskController
```


# Frontend
This is an angular project that you will be able to access on
localhost:4200

## Command to create the host
```
    ng serve
```

## Setting the headers for the Angular Project

### Creating the service
```
ng g s service/tasklist

CREATE src/app/service/tasklist.service.spec.ts (367 bytes)
CREATE src/app/service/tasklist.service.ts (137 bytes)
```

## Creating Components
```
ng g c components/header && ng g c components/footer && ng g c components/tasklist && ng g c components/login
```

## Creating Form, List and Details, Item of the TaskList
```
ng g c components/tasklist/form && ng g c components/tasklist/list && ng g c components/tasklist/list/item && ng g c components/tasklist/detail
```

### Extra commands
```
npm install @angular/http@latest
```
This command it is to install the http package from Angular


# Tasklist structure
This project will contain table structure:
* id
* title
* status
* date


# Components
```
Header
    TaskList
        Form
        List
        Details
    Login
Footer
```
