/**
 * Production WebSocket Service
 *
 * This provides a foundation for true real-time synchronization.
 */
class WebSocketService {
  constructor() {
    this.socket = null;
    this.url = import.meta.env.VITE_WS_URL || 'wss://api.production-server.com/ws';
    this.listeners = new Map();
  }

  connect() {
    if (this.socket) return;

    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.info('PRODUCTION_STREAM: Connection established.');
      // Send auth token if required
      const token = localStorage.getItem('prod_auth_token');
      if (token) {
        this.socket.send(JSON.stringify({ type: 'AUTH', token }));
      }
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (this.listeners.has(data.type)) {
        this.listeners.get(data.type).forEach(callback => callback(data.payload));
      }
    };

    this.socket.onclose = () => {
      console.warn('PRODUCTION_STREAM: Connection lost. Re-establishing...');
      this.socket = null;
      setTimeout(() => this.connect(), 5000);
    };

    this.socket.onerror = (error) => {
      console.error('PRODUCTION_STREAM: Pipeline error.', error);
    };
  }

  subscribe(type, callback) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type).add(callback);

    return () => {
      this.listeners.get(type).delete(callback);
    };
  }

  send(data) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    }
  }
}

export const wsService = new WebSocketService();
