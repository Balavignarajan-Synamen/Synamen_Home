"use client"

import { useState } from "react"
import { Plus, Sparkles, Check, Trash2, Clock, CheckCircle2 } from "lucide-react"

// TaskForm Component
function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTask(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-blue-200" />
        <h2 className="text-xl font-semibold text-white">Add New Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-transparent transition-all duration-300"
          />
        </div>

        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </form>
    </div>
  )
}

// TaskList Component
function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 text-center">
        <div className="text-6xl mb-4">🎯</div>
        <h3 className="text-xl font-semibold text-white mb-2">No tasks yet!</h3>
        <p className="text-white/70">Add your first task to get started on your productivity journey.</p>
      </div>
    )
  }

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center gap-2 mb-6">
        <CheckCircle2 className="w-6 h-6 text-blue-200" />
        <h2 className="text-xl font-semibold text-white">Your Tasks</h2>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] animate-slide-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleTask(task.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  task.completed
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-white/40 hover:border-blue-400 hover:bg-blue-400/20"
                }`}
              >
                {task.completed && <Check className="w-4 h-4" />}
              </button>

              <span
                className={`flex-1 transition-all duration-300 ${
                  task.completed ? "text-white/60 line-through" : "text-white"
                }`}
              >
                {task.text}
              </span>

              <div className="flex items-center gap-2">
                {!task.completed && <Clock className="w-4 h-4 text-blue-200 animate-pulse" />}

                <button
                  onClick={() => deleteTask(task.id)}
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 hover:scale-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main TaskManager Component
export default function TaskManager() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task
      }),
    )
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(filteredTasks)
  }

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">✨ Task Manager</h1>
          <p className="text-white/80 text-lg sm:text-xl">Stay organized and productive with style</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
            <div className="text-3xl font-bold text-white">{totalTasks}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Total Tasks</div>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
            <div className="text-3xl font-bold text-blue-200">{completedTasks}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Completed</div>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
            <div className="text-3xl font-bold text-blue-100">{totalTasks - completedTasks}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Remaining</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task Form */}
          <div className="lg:col-span-1">
            <TaskForm addTask={addTask} />
          </div>

          {/* Task List */}
          <div className="lg:col-span-2">
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
          </div>
        </div>

        {/* Progress Bar */}
        {totalTasks > 0 && (
          <div className="mt-8 bg-white/20 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">Progress</span>
              <span className="text-white/80 text-sm">{Math.round((completedTasks / totalTasks) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-300 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  )
}
