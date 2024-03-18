from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Collection, Monster, MonsterType, Task, TaskType, Location, LocationType

admin.site.site_header = 'Admin Dashboard'
admin.site.site_title = 'Admin Dashboard'
admin.site.index_title = 'Welcome to Admin Dashboard'
admin.site.register(User, UserAdmin)
admin.site.register(Collection)
admin.site.register(Monster)
admin.site.register(MonsterType)
admin.site.register(Task)
admin.site.register(TaskType)
admin.site.register(Location)
admin.site.register(LocationType)