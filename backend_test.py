#!/usr/bin/env python3
"""
Backend Testing Suite for Le Family's Restaurant
Tests all API endpoints for production readiness
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env
BACKEND_URL = "https://familys-app-makeover.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.results = []
        self.total_tests = 0
        self.passed_tests = 0
        self.failed_tests = 0
        
    def log_result(self, test_name, success, message, response_code=None):
        """Log test result"""
        self.total_tests += 1
        if success:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            self.failed_tests += 1
            status = "❌ FAIL"
            
        result = {
            'test': test_name,
            'status': status,
            'message': message,
            'response_code': response_code,
            'timestamp': datetime.now().isoformat()
        }
        self.results.append(result)
        print(f"{status}: {test_name} - {message}")
        if response_code:
            print(f"    Response Code: {response_code}")
        
    def test_server_health(self):
        """Test basic server connectivity"""
        print("\n=== TESTING SERVER HEALTH ===")
        
        # Test root endpoint
        try:
            response = requests.get(BACKEND_URL, timeout=10)
            if response.status_code == 200:
                self.log_result("Root Endpoint", True, "Server responding", response.status_code)
            else:
                self.log_result("Root Endpoint", False, f"Unexpected status code", response.status_code)
        except requests.exceptions.RequestException as e:
            self.log_result("Root Endpoint", False, f"Connection failed: {str(e)}")
            
        # Test API base endpoint
        try:
            response = requests.get(f"{API_BASE}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_result("API Base Endpoint", True, "API responding correctly", response.status_code)
                else:
                    self.log_result("API Base Endpoint", False, f"Unexpected response: {data}", response.status_code)
            else:
                self.log_result("API Base Endpoint", False, f"API not responding", response.status_code)
        except requests.exceptions.RequestException as e:
            self.log_result("API Base Endpoint", False, f"API connection failed: {str(e)}")
        except json.JSONDecodeError as e:
            self.log_result("API Base Endpoint", False, f"Invalid JSON response: {str(e)}")
            
    def test_status_endpoints(self):
        """Test status check endpoints"""
        print("\n=== TESTING STATUS ENDPOINTS ===")
        
        # Test GET /api/status (should work even if empty)
        try:
            response = requests.get(f"{API_BASE}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("GET Status Checks", True, f"Retrieved {len(data)} status checks", response.status_code)
                else:
                    self.log_result("GET Status Checks", False, f"Expected list, got: {type(data)}", response.status_code)
            else:
                self.log_result("GET Status Checks", False, f"Failed to get status checks", response.status_code)
        except requests.exceptions.RequestException as e:
            self.log_result("GET Status Checks", False, f"Request failed: {str(e)}")
        except json.JSONDecodeError as e:
            self.log_result("GET Status Checks", False, f"Invalid JSON response: {str(e)}")
            
        # Test POST /api/status
        test_client_name = f"test_client_{uuid.uuid4().hex[:8]}"
        try:
            payload = {"client_name": test_client_name}
            response = requests.post(f"{API_BASE}/status", 
                                   json=payload, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("client_name") == test_client_name and 
                    "id" in data and 
                    "timestamp" in data):
                    self.log_result("POST Status Check", True, f"Created status check for {test_client_name}", response.status_code)
                else:
                    self.log_result("POST Status Check", False, f"Invalid response structure: {data}", response.status_code)
            else:
                self.log_result("POST Status Check", False, f"Failed to create status check", response.status_code)
                
        except requests.exceptions.RequestException as e:
            self.log_result("POST Status Check", False, f"Request failed: {str(e)}")
        except json.JSONDecodeError as e:
            self.log_result("POST Status Check", False, f"Invalid JSON response: {str(e)}")
            
        # Verify the created status check appears in GET
        try:
            response = requests.get(f"{API_BASE}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                found_test_client = any(check.get("client_name") == test_client_name for check in data)
                if found_test_client:
                    self.log_result("Status Persistence", True, f"Test client {test_client_name} found in status list", response.status_code)
                else:
                    self.log_result("Status Persistence", False, f"Test client {test_client_name} not found in status list", response.status_code)
            else:
                self.log_result("Status Persistence", False, f"Failed to verify status persistence", response.status_code)
        except Exception as e:
            self.log_result("Status Persistence", False, f"Verification failed: {str(e)}")
            
    def test_error_handling(self):
        """Test error handling"""
        print("\n=== TESTING ERROR HANDLING ===")
        
        # Test invalid endpoint
        try:
            response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
            if response.status_code == 404:
                self.log_result("404 Error Handling", True, "Correctly returns 404 for invalid endpoint", response.status_code)
            else:
                self.log_result("404 Error Handling", False, f"Unexpected status for invalid endpoint", response.status_code)
        except requests.exceptions.RequestException as e:
            self.log_result("404 Error Handling", False, f"Request failed: {str(e)}")
            
        # Test invalid POST data
        try:
            response = requests.post(f"{API_BASE}/status", 
                                   json={"invalid_field": "test"}, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                self.log_result("Validation Error Handling", True, "Correctly handles invalid POST data", response.status_code)
            else:
                self.log_result("Validation Error Handling", False, f"Unexpected response to invalid data", response.status_code)
        except requests.exceptions.RequestException as e:
            self.log_result("Validation Error Handling", False, f"Request failed: {str(e)}")
            
    def test_cors_headers(self):
        """Test CORS configuration"""
        print("\n=== TESTING CORS CONFIGURATION ===")
        
        try:
            # Test with Origin header to trigger CORS response
            headers = {"Origin": "https://example.com"}
            response = requests.get(f"{API_BASE}/", headers=headers, timeout=10)
            response_headers = response.headers
            
            if "access-control-allow-origin" in response_headers or "Access-Control-Allow-Origin" in response_headers:
                cors_origin = response_headers.get('access-control-allow-origin') or response_headers.get('Access-Control-Allow-Origin')
                self.log_result("CORS Headers", True, f"CORS configured: {cors_origin}", response.status_code)
            else:
                self.log_result("CORS Headers", False, "CORS headers not found", response.status_code)
                    
        except requests.exceptions.RequestException as e:
            self.log_result("CORS Headers", False, f"CORS test failed: {str(e)}")
            
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend Tests for Le Family's Restaurant")
        print(f"Backend URL: {BACKEND_URL}")
        print(f"API Base: {API_BASE}")
        print("=" * 60)
        
        self.test_server_health()
        self.test_status_endpoints()
        self.test_error_handling()
        self.test_cors_headers()
        
        # Print summary
        print("\n" + "=" * 60)
        print("🏁 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.total_tests}")
        print(f"✅ Passed: {self.passed_tests}")
        print(f"❌ Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests*100):.1f}%")
        
        if self.failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.results:
                if "❌ FAIL" in result['status']:
                    print(f"  - {result['test']}: {result['message']}")
                    
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)