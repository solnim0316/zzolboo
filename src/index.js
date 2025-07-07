import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/dinoTest.module.css';
import './styles/mainPage.module.css'; // 메인페이지 스타일 추가

// 에러 바운더리 컴포넌트 추가
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // 에러 로깅 등
    console.error('ErrorBoundary caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: 'red' }}>
          <h2>문제가 발생했습니다.</h2>
          <pre>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  // root div가 없을 때 fallback UI
  document.body.innerHTML = '<div style="color:red;padding:40px">root div가 없습니다. public/index.html을 확인하세요.</div>';
}
