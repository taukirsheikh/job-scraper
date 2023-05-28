from django.shortcuts import render
from django.http import JsonResponse
from .jobs_scrapper import scrape_jobs
from django.views import View
import json
# Create your views here.

class JobView(View):
    def get(self,request):
        position='python'
        records=scrape_jobs(position)
        data=json.dumps(records)
        # return JsonResponse(data, safe=False)
        return JsonResponse(records, safe=False)