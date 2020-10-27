<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    /**
    * Method that will add a new task
    */
    public function add(Request $request)
    {
        $title = $request->input('title');
        $status = $request->input('status');
        $date = $request->input('date');

        $task = new Task();
        $task->title = $title;
        $task->status = $status;
        $task->date = $date;

        $task->save();

        return $task;
    }

    /**
    * Method that will get al tasks
    */
    public function get()
    {
        $allTasks = Task::all();
        return response()->json($allTasks);
    }

    /**
    * Method that will get al tasks
    */
    public function getOne(Request $request)
    {
        $id = $request->input('id');
        $task = Task::find($id);
        return response()->json($task);
    }

    /**
     *   Method that will delete the task
    */
    public function delete(Request $request)
    {

        $id = $request->input('id');

        $task = Task::find($id);
        $task->delete();

        return array(
            'id' => $id
        );
    }
}
