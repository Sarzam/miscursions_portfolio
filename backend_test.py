#!/usr/bin/env python3
"""
Backend API Testing for Miscursions Portfolio
Tests the reader counter endpoints and pre-existing status endpoints
"""

import requests
import json
import sys
from datetime import datetime

# Base URL from frontend/.env
BASE_URL = "https://portfolio-flip-1.preview.emergentagent.com/api"

def test_hello_world():
    """Test GET /api/ endpoint"""
    print("🔍 Testing GET /api/ ...")
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ GET /api/ working correctly")
                return True
            else:
                print(f"   ❌ Unexpected response: {data}")
                return False
        else:
            print(f"   ❌ Failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def test_status_endpoints():
    """Test POST and GET /api/status endpoints"""
    print("\n🔍 Testing POST /api/status ...")
    try:
        # Test POST /api/status
        payload = {"client_name": "test-miscursions"}
        response = requests.post(f"{BASE_URL}/status", json=payload)
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("client_name") == "test-miscursions" and "id" in data and "timestamp" in data:
                print("   ✅ POST /api/status working correctly")
                created_id = data["id"]
            else:
                print(f"   ❌ Unexpected POST response: {data}")
                return False
        else:
            print(f"   ❌ POST failed with status {response.status_code}")
            return False
        
        # Test GET /api/status
        print("\n🔍 Testing GET /api/status ...")
        response = requests.get(f"{BASE_URL}/status")
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: Found {len(data)} status entries")
            
            # Check if our created entry is in the list
            found_entry = False
            for entry in data:
                if entry.get("id") == created_id:
                    found_entry = True
                    print(f"   ✅ Found our created entry: {entry}")
                    break
            
            if found_entry:
                print("   ✅ GET /api/status working correctly")
                return True
            else:
                print("   ❌ Created entry not found in GET response")
                return False
        else:
            print(f"   ❌ GET failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def test_reader_counter():
    """Test reader counter endpoints"""
    print("\n🔍 Testing GET /api/reader/count (initial) ...")
    try:
        # First GET - should auto-seed to 12847
        response = requests.get(f"{BASE_URL}/reader/count")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "count" in data and isinstance(data["count"], int):
                initial_count = data["count"]
                if initial_count >= 12847:
                    print(f"   ✅ Initial count is {initial_count} (>= 12847 as expected)")
                else:
                    print(f"   ❌ Initial count {initial_count} is less than expected 12847")
                    return False
            else:
                print(f"   ❌ Invalid response format: {data}")
                return False
        else:
            print(f"   ❌ Failed with status {response.status_code}")
            return False
        
        # First POST - should increment by 1
        print("\n🔍 Testing POST /api/reader/visit (first) ...")
        response = requests.post(f"{BASE_URL}/reader/visit")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "count" in data and isinstance(data["count"], int):
                first_post_count = data["count"]
                if first_post_count == initial_count + 1:
                    print(f"   ✅ First POST incremented count to {first_post_count}")
                else:
                    print(f"   ❌ Expected {initial_count + 1}, got {first_post_count}")
                    return False
            else:
                print(f"   ❌ Invalid response format: {data}")
                return False
        else:
            print(f"   ❌ Failed with status {response.status_code}")
            return False
        
        # Second POST - should increment by 1 again
        print("\n🔍 Testing POST /api/reader/visit (second) ...")
        response = requests.post(f"{BASE_URL}/reader/visit")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "count" in data and isinstance(data["count"], int):
                second_post_count = data["count"]
                if second_post_count == first_post_count + 1:
                    print(f"   ✅ Second POST incremented count to {second_post_count}")
                else:
                    print(f"   ❌ Expected {first_post_count + 1}, got {second_post_count}")
                    return False
            else:
                print(f"   ❌ Invalid response format: {data}")
                return False
        else:
            print(f"   ❌ Failed with status {response.status_code}")
            return False
        
        # Final GET - should return same value as last POST (no increment)
        print("\n🔍 Testing GET /api/reader/count (final) ...")
        response = requests.get(f"{BASE_URL}/reader/count")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "count" in data and isinstance(data["count"], int):
                final_count = data["count"]
                if final_count == second_post_count:
                    print(f"   ✅ Final GET returns same count {final_count} (no increment)")
                    return True
                else:
                    print(f"   ❌ Expected {second_post_count}, got {final_count}")
                    return False
            else:
                print(f"   ❌ Invalid response format: {data}")
                return False
        else:
            print(f"   ❌ Failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Miscursions Portfolio Backend Tests")
    print(f"📍 Base URL: {BASE_URL}")
    print("=" * 60)
    
    results = []
    
    # Test 1: Hello World endpoint
    results.append(("GET /api/", test_hello_world()))
    
    # Test 2: Status endpoints
    results.append(("POST/GET /api/status", test_status_endpoints()))
    
    # Test 3: Reader counter endpoints
    results.append(("Reader Counter Flow", test_reader_counter()))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} {test_name}")
        if result:
            passed += 1
    
    print(f"\n🎯 Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Backend is working correctly.")
        return True
    else:
        print("⚠️  Some tests failed. Check the details above.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)