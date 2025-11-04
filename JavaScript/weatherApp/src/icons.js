const importAll = (r) => {
    const icons = {};
    r.keys().forEach((key) => {
        const name = key.replace('./', '').replace('.png', '');
        icons[name] = r(key);
    });
    return icons;
};

const weatherIcons = importAll(
    require.context('../assets/icons', false, /\.png$/)
);

console.log(weatherIcons);
export default weatherIcons;
