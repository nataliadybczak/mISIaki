<template>
	<div id="calendar">
		<h1 id="invisible">Kalendarz</h1>
        <h2>{{ monthName }}</h2>
		<CalendarView
			:show-date="showDate"
			class="theme-default holiday-us-traditional holiday-us-official">
			<template >
				<CalendarViewHeader
					@input="setShowDate" />
			</template>
		</CalendarView>
	</div>
</template>
<script>
	import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"

	import "../../node_modules/vue-simple-calendar/dist/style.css"
	// The next two lines are optional themes
	import "../../node_modules/vue-simple-calendar/dist/css/default.css"
	import "../../node_modules/vue-simple-calendar/dist/css/holidays-us.css"

	export default {
		name: 'app',
		data: function() {
			return { showDate: new Date() }
		},
		components: {
			CalendarView,
			CalendarViewHeader,
		},
        computed: {
			monthName() {
				const options = { month: 'long' }; // Ustawienia formatowania
				return this.showDate.toLocaleString('default', options); // Zwraca nazwę miesiąca
			}
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
			},
		}
	}
</script>
<style>
	#calendar {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
		margin-left: auto;
		margin-right: auto;
	}
	#invisible{
		opacity: 0;
	}
</style>