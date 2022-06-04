import styled from '@emotion/styled';

const Sidebar = styled.div`
    width: 15%;
    background-color: #94aeef;
    color: white;
    padding: 0.5rem;
    font-size: 1.5rem;
`;

const Nav = styled.nav`
    display: contents;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.li`
    margin: 0.5rem 0;
    &:first-child {
        margin: 0 0 0.5rem 0;
    }
    &:last-child {
        margin: 0.5rem 0 0 0;
    }
    a {
        text-decoration: none;
    }
`;

export default {
    Sidebar,
    Nav,
    List,
    ListItem,
};
