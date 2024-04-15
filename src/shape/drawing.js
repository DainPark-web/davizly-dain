const drawing = ({number, shape}) => {
    const list = [];
    for (let i = 0; i < number; i++){
        list.push(shape(i, i, i));
    }
    return list;
}
export default drawing;