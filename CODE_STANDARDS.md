# Fat-Cow Production - Code Standards

## 🎯 Project Overview
- **Framework**: Gatsby 5.16.0 + React 18.3.1
- **Architecture**: Static Site Generation (SSG) with CMS integration
- **Styling**: SCSS + Bootstrap 5.3.2
- **State Management**: Zustand

## 📝 Core Rules

### ✅ **React Components**
```javascript
// ✅ Function Components with Hooks
const Component = ({ prop = 'defaultValue' }) => {
    const [state, setState] = useState();
    return <div>{prop}</div>;
};

// ✅ PropTypes for components receiving props
Component.propTypes = {
    requiredProp: PropTypes.string.isRequired,
    optionalProp: PropTypes.string
};

// ❌ Avoid defaultProps (deprecated in React 19)
```

### 🎨 **Styling**
```scss
// ✅ BEM methodology
.component-name {}
.component-name__element {}
.component-name--modifier {}
```

### ⚡ **Performance**
```javascript
// ✅ Use React.memo, useMemo, useCallback
const ExpensiveComponent = React.memo(({ data }) => {
    const filteredData = useMemo(() => 
        data.filter(item => item.active), 
        [data]);
    return <List data={filteredData} />;
};
```

### 🔧 **Code Quality**
```javascript
// ✅ Remove console.log in production
if (process.env.NODE_ENV === 'development') {
    console.log('Debug info');
}

// ✅ Meaningful variable names
const isAuthenticated = true;  // ✅ Clear
```

### 🔒 **Security**
```javascript
// ✅ Sanitize user input
import sanitizeHtml from 'sanitize-html';
```

## � Quick Checklist

### Before Commit
- [ ] Remove console.log statements
- [ ] Add PropTypes where needed
- [ ] Remove unused imports
- [ ] Use default parameters instead of defaultProps

### Git Commit Format
```bash
FCP-GATSBY - Brief description
```

## 🚀 Priority Tasks

### High Priority
1. **Remove console.log statements** from production code
2. **Add error boundaries** for better error handling

### Medium Priority
3. **Performance optimization** with React.memo
4. **Add unit tests** for critical components

## 📞 Resources
- [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- [React Docs](https://react.dev/)
