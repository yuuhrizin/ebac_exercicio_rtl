import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    // Renderizar o componente PostComment
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    // Adicionar 2 comentários
    it('Deve adicionar dois comentários', () => {
        const { debug } = render(<PostComment/>);
        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-btn');

        // Adicionar primeiro comentário
        fireEvent.change(input, { target: { value: 'Comentário teste 1.' } });
        fireEvent.click(button);
        expect(screen.getByText('Comentário teste 1.')).toBeInTheDocument();

        // Adcionar segundo comentário
        fireEvent.change(input, { target: { value: 'Comentário teste 2.' } });
        fireEvent.click(button);
        expect(screen.getByText('Comentário teste 2.')).toBeInTheDocument();

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        debug();
    });
});