<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
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

    function get()
    {
        $allTasks = Task::all();
        return response()->json($allTasks);
    }
}
