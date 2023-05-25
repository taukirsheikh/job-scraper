from django.urls import path
from .views import JobView

urlpatterns = [
    
    path('records/',JobView.as_view(),name='records-views'),
]
