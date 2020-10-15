<template>
	<section class="tutorial to-do-list">
		<span class="tutorial-number">07</span>
		<div class="form" role="form">
			<input type="text" class="form-control mb-2" placeholder="Enter new task" v-model="task" />
			<button class="btn btn-primary" :disabled="!task" @click="addTask()">Add the task</button>
		</div>
		<ul class="tasks mt-3 mb-0" v-if="tasks.length">
			<li class="task" v-for="(task, index) in tasks" :key="index">
				<span @click="task.taskCompleted = !task.taskCompleted" :style="{'text-decoration' : task.taskCompleted ? 'line-through' : 'none'}">{{task.taskText}}</span>
				<span @click="removeTask(index)">&times;</span>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'ToDoList',
		data: function () {
			return {
				task: '',
				tasks: []
			}
		},
		methods: {
			addTask: function () {
				if(this.task){
					this.tasks.push({taskText: this.task, taskCompleted: false});
					this.task = '';
				}
			},
			removeTask: function (index) {
				this.tasks.splice(index, 1);
			}
		}
	}
</script>

<style lang="sass" scoped>
	ul
		li
			span
				cursor: pointer
</style>