import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);   //加载数据model文件

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
