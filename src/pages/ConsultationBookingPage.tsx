import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Video, MapPin, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';

export function ConsultationBookingPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    mode: 'online', // 'online' or 'offline'
    message: '',
  });

  // Available time slots
  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
  ];

  // Get today's date and next 30 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends (Saturday = 6, Sunday = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.date || !formData.timeSlot) {
      alert('Please fill in all required fields (Name, Email, Date, and Time Slot)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_BASE_URL}/api/consultation-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          appointmentDate: formData.date,
          appointmentTime: formData.timeSlot,
          appointmentMode: formData.mode,
          type: 'appointment',
        }),
      });

      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = 'Failed to book appointment. Please try again.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = `Server error (${response.status}). Please try again.`;
        }
        console.error('API Error Response:', response.status, errorMessage);
        alert(errorMessage);
        return;
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.success) {
        setShowSuccess(true);
      } else {
        alert(data.error || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Cannot connect to server. Please make sure the backend server is running on http://localhost:3001');
      } else {
        alert('Failed to book appointment. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked Successfully!</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
                  <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                  <p><strong>Time:</strong> {formData.timeSlot}</p>
                  <p><strong>Mode:</strong> {formData.mode === 'online' ? 'Online (Video Call)' : 'Offline (In-Person)'}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We have received your appointment request. We will send you a confirmation email within 24 hours with the meeting link (for online) or location details (for offline).
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate('/digital-marketing')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Back to Digital Marketing
                </button>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      date: '',
                      timeSlot: '',
                      mode: 'online',
                      message: '',
                    });
                  }}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/digital-marketing')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Book Your Consultation</h1>
              <p className="text-gray-600 mt-1">Schedule a free digital marketing consultation</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Date */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Select Date <span className="text-red-500">*</span>
              </h2>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Tomorrow
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-2">
                Available dates: Monday to Friday (next 30 days)
              </p>
            </div>

            {/* Time Slot */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Select Time Slot <span className="text-red-500">*</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.timeSlot === slot
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Consultation Mode */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Consultation Mode</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, mode: 'online' })}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.mode === 'online'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 bg-white hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Video className={`w-6 h-6 ${formData.mode === 'online' ? 'text-blue-600' : 'text-gray-600'}`} />
                    <span className={`font-semibold ${formData.mode === 'online' ? 'text-blue-700' : 'text-gray-700'}`}>
                      Online (Video Call)
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Join via Zoom, Google Meet, or Teams</p>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, mode: 'offline' })}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.mode === 'offline'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 bg-white hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className={`w-6 h-6 ${formData.mode === 'offline' ? 'text-blue-600' : 'text-gray-600'}`} />
                    <span className={`font-semibold ${formData.mode === 'offline' ? 'text-blue-700' : 'text-gray-700'}`}>
                      Offline (In-Person)
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Meet at our office location</p>
                </button>
              </div>
            </div>

            {/* Additional Message */}
            <div className="bg-gray-50 rounded-lg p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your business or any specific questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Booking Appointment...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/digital-marketing')}
                className="px-6 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
