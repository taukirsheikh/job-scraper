from django.urls import path
from .views import JobView, Cotiviti

urlpatterns = [
    
    path('records/',JobView.as_view(),name='records-views'),
    path('cotiviti/',Cotiviti.as_view(),name='cotiviti-views'),
]
