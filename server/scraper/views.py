from django.shortcuts import render
from django.http import JsonResponse
from .jobs_scrapper import scrape_jobs
from django.views import View
# Create your views here.

class JobView(View):
    def get(self,request):
        position='python'
        records=scrape_jobs(position)
        data={'records':records}
        return JsonResponse(data)